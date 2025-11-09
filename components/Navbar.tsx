import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Naveen Kumar
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <a 
              href="https://medium.com/@navindevan" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Blog
            </a>
            <a 
              href="https://topmate.io/navindev" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Book Online
            </a>
          </nav>
          {/* Mobile menu button - can be enhanced later */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


