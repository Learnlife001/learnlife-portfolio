import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const {
    payment_status,
    order_id,
    price_amount,
    pay_amount,
    payment_id,
    payment_created_at,
  } = body;

  // Only handle successful payments
  if (payment_status === 'confirmed') {
    const message = `✅ New Payment Received:
🛒 Product ID: ${order_id}
💵 Amount: $${price_amount}
💰 Crypto Paid: ${pay_amount}
🕒 Time: ${payment_created_at}
🔗 TX ID: ${payment_id}`;

    // Store order in Supabase
    await supabase.from('orders').insert([
      {
        product_id: order_id,
        product_name: order_id.replace(/-/g, ' '),
        price: price_amount,
        status: 'paid',
        created_at: payment_created_at,
      },
    ]);

    // Send Telegram alert
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
  }

  return NextResponse.json({ ok: true });
}
