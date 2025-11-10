const navLinks = [
  { label: 'Qué es PLT', href: '#que-es-plt' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Token', href: '#token-plt' },
  { label: 'Participar', href: '#participar' },
  { label: 'Roadmap', href: '#roadmap' }
];

export function Navbar() {
  return (
    <header className="border-b border-white/5 bg-[#0a1b2e]/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <a href="#" className="text-lg font-spaceGrotesk tracking-widest text-[#00d4ff]">
          PLT
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#7de6ff]">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
