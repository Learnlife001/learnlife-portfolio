export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">✅ Payment Successful!</h1>
      <p className="text-lg text-gray-300 mb-6">
        Thank you for your purchase. We will process your order shortly.
      </p>
      <a
        href="/products"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Back to Products
      </a>
    </main>
  );
}
