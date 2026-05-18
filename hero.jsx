const Hero = () => {
  const words = ['mapas mentales', 'flashcards', 'resúmenes', 'quizzes'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v+1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="aurora"><div className="aurora-3"></div></div>

      {/* subtle horizon line */}
      <div className="absolute inset-x-0 top-16 hair opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center z-10">
        {/* eyebrow pill */}
        <div className="inline-flex items-center gap-2 glass rounded-full pl-1.5 pr-3.5 py-1.5 text-[12.5px] text-white/80 mb-8">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-violet-500/20 to-cyan-400/20 border border-white/10 rounded-full px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-soft"></span>
            v2.0
          </span>
          <span>Ahora con generación en tiempo real</span>
          <Icon name="arrow" className="w-3 h-3 text-white/60" />
        </div>

        <h1 className="font-sans font-medium text-[44px] leading-[1.02] sm:text-[68px] md:text-[84px] sm:leading-[0.98] tracking-[-0.035em]">
          <span className="grad-text">Tus apuntes,</span>
          <br />
          <span className="text-white">convertidos en </span>
          <span className="relative inline-block align-baseline">
            <span key={i} className="grad-text-2 font-serif italic inline-block" style={{ animation: 'fade-up .5s ease' }}>
              {words[i]}
            </span>
            <span className="caret inline-block w-[3px] ml-1 h-[0.8em] align-middle bg-white/60"></span>
          </span>
        </h1>

        <p className="mt-7 max-w-2xl mx-auto text-[16px] sm:text-[18px] text-white/60 leading-relaxed">
          NeuroFlow usa IA para transformar cualquier apunte, PDF o clase grabada en
          material de estudio inteligente. Estudia el doble en la mitad del tiempo.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#signup" className="btn-primary inline-flex items-center gap-2 text-[14px] font-medium px-5 py-3 rounded-full">
            Empieza gratis — sin tarjeta
            <Icon name="arrow" className="w-4 h-4" />
          </a>
          <a href="#demo" className="btn-ghost inline-flex items-center gap-2 text-[14px] font-medium px-5 py-3 rounded-full">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-white/10">
              <Icon name="play" className="w-3 h-3" />
            </span>
            Ver demo (1:24)
          </a>
        </div>

        {/* social proof row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-mono uppercase tracking-wider text-white/40">
          <div className="flex items-center gap-2"><div className="flex -space-x-2">
            {[1,2,3,4].map(n => (
              <div key={n} className="w-6 h-6 rounded-full border border-white/20"
                style={{background: ['linear-gradient(135deg,#A78BFA,#7C3AED)','linear-gradient(135deg,#22D3EE,#0891B2)','linear-gradient(135deg,#F472B6,#DB2777)','linear-gradient(135deg,#FBBF24,#D97706)'][n-1]}}/>
            ))}
          </div>
          <span className="text-white/70 normal-case tracking-normal font-sans">+48,000 estudiantes</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(n => (
              <svg key={n} viewBox="0 0 24 24" className="w-3.5 h-3.5 text-cyan-400"><path fill="currentColor" d="m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.73 1.64 7.03Z"/></svg>
            ))}
            <span className="ml-1 text-white/70 normal-case tracking-normal font-sans">4.9 en App Store</span>
          </div>
        </div>
      </div>

      {/* Product mockup */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 mt-16 sm:mt-20 z-10" id="producto">
        <ProductMockup />
      </div>

      {/* University marquee */}
      <div className="relative mt-20 sm:mt-28">
        <p className="text-center text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/40">
          Confiado por estudiantes de
        </p>
        <div className="mt-6 relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(2)].map((_,k) => (
              <div key={k} className="flex gap-12 items-center pr-12">
                {['Stanford','MIT','UNAM','ITESM','Harvard','Berkeley','Oxford','UPenn','UBA','Politécnico'].map(u => (
                  <div key={u+k} className="text-white/40 hover:text-white/80 transition text-[20px] font-serif italic tracking-tight whitespace-nowrap">
                    {u}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
