const SectionHeader = ({ eyebrow, title, sub }) => (
  <div className="text-center max-w-3xl mx-auto mb-14">
    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400/80 mb-4">{eyebrow}</div>
    <h2 className="font-medium text-[34px] sm:text-[48px] leading-[1.05] tracking-[-0.025em]">
      {title}
    </h2>
    {sub && <p className="mt-5 text-white/55 text-[16px] sm:text-[17px] leading-relaxed">{sub}</p>}
  </div>
);

const Benefits = () => {
  const items = [
    {
      icon: 'map',
      title: 'Mapas mentales auto-generados',
      body: 'Visualiza la estructura de cualquier tema en segundos. La IA detecta jerarquías, relaciones y conceptos clave.',
      tag: 'Visual',
      tone: 'violet',
      big: true,
    },
    {
      icon: 'cards',
      title: 'Flashcards con repetición espaciada',
      body: 'Algoritmo basado en SuperMemo SM-2. Recuerda más, repasa menos.',
      tag: 'Memoria',
      tone: 'cyan',
    },
    {
      icon: 'quiz',
      title: 'Quizzes adaptativos',
      body: 'Las preguntas se ajustan a tu nivel. Más difíciles cuando aciertas, más fáciles cuando dudas.',
      tag: 'Adaptativo',
      tone: 'pink',
    },
    {
      icon: 'bolt',
      title: 'Resúmenes en 30 segundos',
      body: 'Sube un PDF de 200 páginas y obtén un resumen estructurado con los puntos críticos.',
      tag: 'Velocidad',
      tone: 'cyan',
    },
    {
      icon: 'globe',
      title: '14 idiomas soportados',
      body: 'Estudia en español, inglés, francés, alemán o japonés. La IA mantiene la terminología técnica.',
      tag: 'Global',
      tone: 'violet',
    },
    {
      icon: 'clock',
      title: 'Plan de estudio personal',
      body: 'NeuroFlow analiza tu calendario y reparte el estudio para que llegues listo al examen.',
      tag: 'Planificación',
      tone: 'pink',
      big: true,
    },
  ];

  const tones = {
    violet: 'from-violet-500/25 to-violet-500/0 border-violet-400/20 text-violet-300',
    cyan:   'from-cyan-400/25 to-cyan-400/0 border-cyan-400/20 text-cyan-300',
    pink:   'from-pink-400/25 to-pink-400/0 border-pink-400/20 text-pink-300',
  };

  return (
    <section className="relative py-24 sm:py-32" id="beneficios">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="// Beneficios"
          title={<>Todo lo que necesitas para estudiar <span className="grad-text-2 font-serif italic">en serio</span>.</>}
          sub="Una sola herramienta reemplaza tu app de notas, tu set de flashcards y tu carpeta de PDFs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((b, i) => (
            <div key={i} className={`glass rounded-2xl p-7 card-hover relative overflow-hidden ${b.big ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
              {/* tone glow */}
              <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${tones[b.tone].split(' ').slice(0,2).join(' ')} opacity-60 blur-3xl pointer-events-none`}></div>

              <div className="relative flex items-start justify-between gap-4 mb-6">
                <div className={`w-11 h-11 grid place-items-center rounded-xl border bg-gradient-to-br ${tones[b.tone]}`}>
                  <Icon name={b.icon} className="w-5 h-5" />
                </div>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-white/40">{b.tag}</span>
              </div>

              <h3 className="relative text-[19px] font-medium tracking-tight mb-2">{b.title}</h3>
              <p className="relative text-white/55 text-[14.5px] leading-relaxed max-w-md">{b.body}</p>

              {b.big && (
                <div className="relative mt-6 pt-6 border-t border-white/[0.06]">
                  {b.icon === 'map' && <MiniMapPreview />}
                  {b.icon === 'clock' && <MiniPlanPreview />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MiniMapPreview = () => (
  <svg viewBox="0 0 360 100" className="w-full h-24">
    <defs>
      <linearGradient id="mg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#A78BFA"/>
        <stop offset="100%" stopColor="#22D3EE"/>
      </linearGradient>
    </defs>
    <g stroke="url(#mg)" strokeWidth="1" fill="none" opacity="0.7">
      <path d="M180 50 C 130 50, 100 20, 40 20"/>
      <path d="M180 50 C 130 50, 100 80, 40 80"/>
      <path d="M180 50 C 230 50, 260 20, 320 20"/>
      <path d="M180 50 C 230 50, 260 80, 320 80"/>
    </g>
    <circle cx="180" cy="50" r="14" fill="rgba(11,13,20,0.95)" stroke="rgba(255,255,255,0.3)"/>
    {[{x:40,y:20,c:'#A78BFA'},{x:40,y:80,c:'#22D3EE'},{x:320,y:20,c:'#F472B6'},{x:320,y:80,c:'#FBBF24'}].map((p,i)=>(
      <g key={i}><circle cx={p.x} cy={p.y} r="8" fill={p.c} opacity="0.2"/><circle cx={p.x} cy={p.y} r="4" fill={p.c}/></g>
    ))}
  </svg>
);

const MiniPlanPreview = () => {
  const days = ['L','M','M','J','V','S','D'];
  const heights = [40, 70, 30, 90, 55, 100, 25];
  return (
    <div>
      <div className="flex items-end gap-1.5 h-24">
        {heights.map((h,i)=>(
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full rounded-md bg-gradient-to-t from-violet-500/60 to-cyan-400/60" style={{height:`${h}%`}}></div>
            <span className="text-[10px] font-mono text-white/40">{days[i]}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 text-[11px] font-mono text-white/50">
        <span>Examen final: <span className="text-cyan-400">Vie 24 jun</span></span>
        <span>14 días restantes</span>
      </div>
    </div>
  );
};

window.Benefits = Benefits;
window.SectionHeader = SectionHeader;
