const Logo = ({ size = 28 }) => (
  <div className="flex items-center gap-2">
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="60%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="14" fill="none" stroke="url(#lg1)" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="url(#lg1)" />
        <circle cx="7" cy="11" r="2" fill="#A78BFA" />
        <circle cx="25" cy="11" r="2" fill="#22D3EE" />
        <circle cx="7" cy="21" r="2" fill="#22D3EE" />
        <circle cx="25" cy="21" r="2" fill="#F472B6" />
        <path d="M9 12 L13 15 M23 12 L19 15 M9 20 L13 17 M23 20 L19 17" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
    <span className="text-[17px] font-semibold tracking-tight">NeuroFlow</span>
  </div>
);

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Producto', href: '#producto' },
    { label: 'Cómo funciona', href: '#como' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-1.5 py-1.5">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="px-3.5 py-1.5 text-[13.5px] text-white/70 hover:text-white rounded-full hover:bg-white/5 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#login" className="hidden sm:inline-flex text-[13.5px] text-white/70 hover:text-white px-3 py-2 transition">Iniciar sesión</a>
          <a href="#signup" className="btn-primary inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-2 rounded-full">
            Empezar gratis <Icon name="arrow" className="w-3.5 h-3.5" />
          </a>
          <button onClick={() => setMobile(v=>!v)} className="md:hidden glass rounded-full w-9 h-9 grid place-items-center">
            <Icon name={mobile?'arrow':'layers'} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden mx-5 mb-3 glass-strong rounded-2xl p-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={()=>setMobile(false)}
               className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 rounded-xl">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

window.Nav = Nav;
window.Logo = Logo;
