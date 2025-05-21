'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useSearchParams } from 'next/navigation';

type Order = {
  id: string;
  name?: string;
  email?: string;
  address?: string;
  product_id: string;
  product_name: string;
  price: number;
  status: string;
  created_at: string;
};

export default function AdminOrdersPage() {
  const [authorized, setAuthorized] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = searchParams.get('key');
    if (key === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setAuthorized(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!authorized) return;

    // ✅ Move Supabase client here
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setOrders(data as Order[]);
      setLoading(false);
    };

    fetchOrders();
  }, [authorized]);

  if (!authorized) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
        <p className="text-xl">🔐 Access Denied</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">🧾 Admin Orders</h1>

      {loading ? (
        <p className="text-gray-400">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-400">No orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Price ($)</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="p-3">{order.product_name}</td>
                  <td className="p-3">${order.price}</td>
                  <td className="p-3 capitalize text-green-400">{order.status}</td>
                  <td className="p-3 text-sm text-gray-400">
                    {new Date(order.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
