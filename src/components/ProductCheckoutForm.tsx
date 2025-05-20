'use client';

import { useState } from 'react';

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
  };
  onClose: () => void;
};

export default function ProductCheckoutForm({ product, onClose }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          product,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Payment error');

      setRedirectUrl(data.invoice_url);
    } catch (err) {
  if (err instanceof Error) {
    setError(err.message || 'Something went wrong');
  } else {
    setError('Something went wrong');
  }
}
  };

  if (redirectUrl) {
    return (
      <div className="text-center">
        <p className="mb-4 text-black">
          Redirecting to payment...
        </p>
        <a
          href={redirectUrl}
          target="_blank"
          className="text-blue-600 underline"
        >
          Click here if not redirected
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600">You’re buying: <strong>{product.name}</strong> for <strong>${product.price}</strong></p>

      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="address"
        type="text"
        placeholder="Shipping Address"
        required
        value={form.address}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        {loading ? 'Processing...' : 'Proceed to Pay'}
      </button>

      <button
        type="button"
        onClick={onClose}
        className="text-sm text-blue-600 underline mt-2"
      >
        Cancel
      </button>
    </form>
  );
}
