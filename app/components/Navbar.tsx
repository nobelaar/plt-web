'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../content/site-data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b border-white/5 bg-[#0a1b2e]/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <Link href="/" className="text-lg font-spaceGrotesk tracking-widest text-[#00d4ff]">
          PLT
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#7de6ff]">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-[#0a1b2e] md:hidden">
          <nav className="section-container flex flex-col gap-4 py-4 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="hover:text-[#7de6ff]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
