import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Learnlife Portfolio",
  description: "Built by CJ — Developer & Cybersecurity Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="p-4 flex gap-6 border-b border-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/hire-me">Hire Me</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
        </nav>

        {/* Main content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
