import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Okuma Portfolio",
  description: "Built by Okuma Chigozie G. A Developer and security Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="p-4 flex gap-6 border-b border-gray-700">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/products">Products</Link>
          <Link href="/profile">Profile</Link>
        </nav>

        {/* Main content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
