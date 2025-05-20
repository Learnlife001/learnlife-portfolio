'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProductCheckoutForm from '@/components/ProductCheckoutForm';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 'samsung-washing-machine',
    name: 'Samsung Washing Machine',
    price: 480,
    description: '10kg front-load washing machine, energy-efficient with smart wash modes.',
    image: '/images/products/washing-machine.jpg',
  },
  {
    id: 'sewing-machine',
    name: 'Industrial Sewing Machine',
    price: 250,
    description: 'Heavy-duty straight-stitch machine for factory production use.',
    image: '/images/products/sewing-machine.jpg',
  },
  {
    id: 'chigo-freezer',
    name: 'Chigo Freezer',
    price: 320,
    description: 'High-capacity chest freezer, fast-freeze mode, ideal for shops and homes.',
    image: '/images/products/chigo-freezer.jpg',
  },
  {
    id: 'dell-laptop',
    name: 'Dell Laptop (Various Colors)',
    price: 600,
    description: 'Refurbished Dell laptops, multiple colors available. i5/i7 8GB/256GB SSD.',
    image: '/images/products/dell-laptop.jpg',
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🛍️ Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-300 mt-1">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
            <ProductCheckoutForm
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
