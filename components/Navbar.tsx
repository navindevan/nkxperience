import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-gray-900">
            Naveen Kumar
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-gray-900 text-gray-700">Home</Link>
            <Link href="/portfolio" className="hover:text-gray-900 text-gray-700">Portfolio</Link>
            <a href="https://medium.com/@navindevan" target="_blank" rel="noreferrer" className="hover:text-gray-900 text-gray-700">Blog</a>
            <a href="https://topmate.io/navindev" target="_blank" rel="noreferrer" className="hover:text-gray-900 text-gray-700">Book Online</a>
          </nav>
        </div>
      </div>
    </header>
  );
}


