const Pricing = () => {
  const [annual, setAnnual] = React.useState(true);

  const plans = [
    {
      name: 'Free',
      tag: 'Para probar',
      priceM: 0, priceY: 0,
      desc: 'Lo esencial para empezar a estudiar diferente.',
      cta: 'Empezar gratis',
      features: [
        '5 documentos / mes',
        'Mapas mentales básicos',
        'Flashcards (hasta 50)',
        'Quiz estándar',
        '1 idioma',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      tag: 'Más popular',
      priceM: 9, priceY: 6,
      desc: 'Para estudiantes que van en serio. Sin límites de contenido.',
      cta: 'Empezar 7 días gratis',
      features: [
        'Documentos ilimitados',
        'Mapas mentales avanzados',
        'Flashcards con SRS adaptativo',
        'Quizzes adaptativos',
        '14 idiomas + audio',
        'Plan de estudio personalizado',
        'Exporta a Anki / Notion',
      ],
      featured: true,
    },
    {
      name: 'Campus',
      tag: 'Para equipos',
      priceM: 19, priceY: 14,
      desc: 'Para grupos de estudio, clases y carreras enteras.',
      cta: 'Hablar con ventas',
      features: [
        'Todo lo de Pro',
        'Hasta 30 miembros',
        'Espacios compartidos',
        'Análisis de progreso grupal',
        'Soporte prioritario 24/7',
        'Integraciones LMS',
      ],
      featured: false,
    },
  ];

  return (
    <section id="precios" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="// Precios"
          title={<>Estudia gratis. Mejora cuando <span className="grad-text-2 font-serif italic">estés listo</span>.</>}
          sub="Sin contratos. Cancela cuando quieras. Estudiantes verificados obtienen 50% de descuento."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="glass rounded-full p-1 flex items-center gap-1 text-[12.5px]">
            <button onClick={()=>setAnnual(false)}
              className={`px-4 py-2 rounded-full transition ${!annual?'bg-white text-ink-900':'text-white/65 hover:text-white'}`}>
              Mensual
            </button>
            <button onClick={()=>setAnnual(true)}
              className={`relative px-4 py-2 rounded-full transition ${annual?'bg-white text-ink-900':'text-white/65 hover:text-white'}`}>
              Anual
              <span className="absolute -top-2 -right-2 text-[9.5px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-400 text-ink-900">−35%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-7 flex flex-col ${p.featured ? 'conic-border bg-ink-900' : 'glass'} card-hover`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10.5px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-ink-900 font-semibold">
                  Más popular
                </div>
              )}

              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-[20px] font-medium">{p.name}</h3>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-white/40">{p.tag}</span>
              </div>
              <p className="text-white/55 text-[13.5px] leading-relaxed min-h-[42px]">{p.desc}</p>

              <div className="my-6 flex items-baseline gap-1">
                <span className="font-serif text-[56px] leading-none">${annual ? p.priceY : p.priceM}</span>
                <span className="text-white/45 text-[13px]">/mes</span>
                {annual && p.priceM > 0 && (
                  <span className="ml-2 text-[11.5px] text-white/35 line-through">${p.priceM}</span>
                )}
              </div>

              <a href={`#${p.name.toLowerCase()}`}
                 className={`text-center text-[13.5px] font-medium py-3 rounded-full transition ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                {p.cta}
              </a>

              <div className="hair my-6"></div>

              <ul className="space-y-3 text-[13.5px]">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-white/75">
                    <span className={`mt-0.5 grid place-items-center w-4 h-4 rounded-full ${p.featured ? 'bg-gradient-to-br from-violet-400 to-cyan-400 text-ink-900' : 'bg-white/[0.08] text-white/60'}`}>
                      <Icon name="check" className="w-2.5 h-2.5" stroke={2.5}/>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/40">
          <span className="flex items-center gap-1.5"><Icon name="shield" className="w-3.5 h-3.5 text-cyan-400/70"/> Garantía 30 días</span>
          <span className="flex items-center gap-1.5"><Icon name="bolt" className="w-3.5 h-3.5 text-violet-400/70"/> Cancela cuando quieras</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="w-3.5 h-3.5 text-pink-400/70"/> Tus datos son tuyos</span>
        </div>
      </div>
    </section>
  );
};

window.Pricing = Pricing;
