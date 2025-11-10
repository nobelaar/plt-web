import Link from 'next/link';
import { footerLinks } from '../content/site-data';

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-[#8891a2]">
          PLT — Poder, Libertad y Tecnología. Una red soberana construida para que la infraestructura
          digital vuelva a servir a las personas.
        </p>
        <nav className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#7de6ff]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
