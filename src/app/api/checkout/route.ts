import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, address, product } = body;

  if (!product || !name || !email || !address) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY;
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!NOWPAYMENTS_API_KEY || !SITE_URL) {
    return NextResponse.json({ message: 'Missing environment variables' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.nowpayments.io/v1/invoice', {
      method: 'POST',
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_amount: product.price,
        price_currency: 'usd',
        pay_currency: 'usdttrc20',
        order_id: product.id,
        order_description: `Buy ${product.name} for ${name}`,
        ipn_callback_url: `${SITE_URL}/api/nowpayments/webhook`, // ✅ FIXED
        success_url: `${SITE_URL}/success`,
        cancel_url: `${SITE_URL}/products`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message || 'Failed to create invoice' }, { status: res.status });
    }

    return NextResponse.json({ invoice_url: data.invoice_url });
  } catch (_err) {
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}
