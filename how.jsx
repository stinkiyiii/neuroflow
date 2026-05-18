const HowItWorks = () => {
  const steps = [
    {
      n: '01',
      title: 'Sube tu material',
      body: 'PDF, foto de un cuaderno, slides, audio de clase o texto pegado. NeuroFlow lo entiende todo.',
      icon: 'upload',
      visual: <StepFile />,
    },
    {
      n: '02',
      title: 'La IA hace su magia',
      body: 'En 30 segundos se generan mapas mentales, resúmenes, flashcards y quizzes adaptados.',
      icon: 'wand',
      visual: <StepWand />,
    },
    {
      n: '03',
      title: 'Estudia y domina',
      body: 'Repaso espaciado, quizzes diarios y métricas claras. Llega al examen con 0% de ansiedad.',
      icon: 'target',
      visual: <StepTarget />,
    },
  ];

  return (
    <section id="como" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="// Cómo funciona"
          title={<>De apuntes caóticos a dominio total <span className="grad-text-2 font-serif italic">en 3 pasos</span>.</>}
          sub="Sin curva de aprendizaje. Sin plantillas. Sin perder tiempo organizando."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-px">
            <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="url(#liG)" strokeWidth="1" strokeDasharray="4 6" />
              <defs>
                <linearGradient id="liG" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(167,139,250,0.5)"/>
                  <stop offset="0.5" stopColor="rgba(34,211,238,0.5)"/>
                  <stop offset="1" stopColor="rgba(244,114,182,0.5)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-7 card-hover relative">
              <div className="flex items-center justify-between mb-6">
                <div className="grid place-items-center w-14 h-14 rounded-2xl glass-strong relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/10"></div>
                  <Icon name={s.icon} className="w-6 h-6 relative" />
                </div>
                <span className="font-mono text-[34px] font-light text-white/15">{s.n}</span>
              </div>
              <h3 className="text-[20px] font-medium tracking-tight mb-2">{s.title}</h3>
              <p className="text-white/55 text-[14.5px] leading-relaxed">{s.body}</p>
              <div className="mt-6 pt-5 border-t border-white/[0.06] min-h-[110px]">
                {s.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepFile = () => (
  <div className="flex items-center gap-2 flex-wrap">
    {[
      {n: 'biologia-cap4.pdf', s: '2.3 MB', c:'#A78BFA'},
      {n: 'apuntes-clase.jpg', s: '1.1 MB', c:'#22D3EE'},
      {n: 'lecture-04.mp3',    s: '8.7 MB', c:'#F472B6'},
    ].map((f,i)=>(
      <div key={i} className="flex items-center gap-2 glass rounded-md px-2.5 py-1.5 text-[11.5px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full" style={{background:f.c}}></span>
        <span className="text-white/80">{f.n}</span>
        <span className="text-white/30">{f.s}</span>
      </div>
    ))}
  </div>
);

const StepWand = () => {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    let p = 0;
    const t = setInterval(()=>{
      p = (p + 7) % 105;
      setPct(p > 100 ? 100 : p);
    }, 200);
    return () => clearInterval(t);
  }, []);
  return (
    <div>
      <div className="flex justify-between text-[11px] font-mono text-white/50 mb-2">
        <span>Procesando con neural-v2.1</span>
        <span className="text-cyan-400">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 transition-all duration-200" style={{width:`${pct}%`}}></div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {['Mapa','Resumen','Cards','Quiz'].map((l,i)=>(
          <div key={i} className="text-[10px] font-mono text-center py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/60">
            {l} ✓
          </div>
        ))}
      </div>
    </div>
  );
};

const StepTarget = () => (
  <div>
    <div className="flex items-baseline gap-2 mb-3">
      <span className="font-serif text-[36px] grad-text-2 leading-none">94%</span>
      <span className="text-white/50 text-[12px]">retención a 7 días</span>
    </div>
    <div className="flex gap-1">
      {Array.from({length:21}).map((_,i)=>(
        <div key={i} className="flex-1 rounded-sm" style={{
          height: 22,
          background: i < 18 ? `linear-gradient(180deg, #A78BFA${i>14?'CC':'66'}, #22D3EE${i>14?'CC':'66'})` : 'rgba(255,255,255,0.05)',
        }}></div>
      ))}
    </div>
    <div className="flex justify-between mt-2 text-[10.5px] font-mono text-white/40">
      <span>Hace 21 días</span><span>Hoy</span>
    </div>
  </div>
);

window.HowItWorks = HowItWorks;
