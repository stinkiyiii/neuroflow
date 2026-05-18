const ProductMockup = () => {
  const tabs = [
    { id: 'mindmap', label: 'Mapa mental', icon: 'map' },
    { id: 'summary', label: 'Resumen', icon: 'file' },
    { id: 'flash', label: 'Flashcards', icon: 'cards' },
    { id: 'quiz', label: 'Quiz', icon: 'quiz' },
  ];
  const [tab, setTab] = React.useState('mindmap');

  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute -inset-x-10 -top-10 -bottom-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-cyan-400/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative glass-strong rounded-[20px] p-1.5 shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white/15"></span>
            <span className="w-3 h-3 rounded-full bg-white/15"></span>
            <span className="w-3 h-3 rounded-full bg-white/15"></span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-black/30 border border-white/5 rounded-md px-3 py-1 text-[11px] font-mono text-white/40 flex items-center gap-2">
              <Icon name="shield" className="w-3 h-3 text-cyan-400/70" />
              app.neuroflow.io/study/biologia-celular
            </div>
          </div>
          <div className="text-[10.5px] font-mono text-white/30">⌘ K</div>
        </div>

        <div className="grid grid-cols-12 min-h-[460px]">
          {/* Sidebar */}
          <aside className="hidden md:flex col-span-3 lg:col-span-2 border-r border-white/[0.06] flex-col p-3 gap-1 bg-black/20">
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/30 px-2 pt-1 pb-2">Materias</div>
            {[
              { name: 'Biología Celular', active: true, dot: '#A78BFA' },
              { name: 'Cálculo II', dot: '#22D3EE' },
              { name: 'Historia Universal', dot: '#F472B6' },
              { name: 'Química Orgánica', dot: '#FBBF24' },
              { name: 'Filosofía', dot: '#86EFAC' },
            ].map(s => (
              <div key={s.name} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] cursor-pointer transition ${s.active ? 'bg-white/[0.06] text-white' : 'text-white/55 hover:bg-white/[0.03] hover:text-white'}`}>
                <span className="w-1.5 h-1.5 rounded-full" style={{background: s.dot}}></span>
                <span className="truncate">{s.name}</span>
              </div>
            ))}
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/30 px-2 pt-4 pb-2">Esta semana</div>
            <div className="px-2 text-[11.5px] text-white/40 leading-relaxed">
              <div className="flex justify-between"><span>Estudiado</span><span className="font-mono text-cyan-400">4h 22m</span></div>
              <div className="flex justify-between mt-1"><span>Tarjetas</span><span className="font-mono text-violet-400">86 / 120</span></div>
              <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-400 to-cyan-400" style={{width: '72%'}}></div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col">
            {/* Top bar with tabs */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <div>
                <div className="text-[10.5px] font-mono uppercase tracking-wider text-white/40">Capítulo 4 · 47 páginas</div>
                <div className="text-[17px] font-medium mt-0.5">La célula y sus organelos</div>
              </div>
              <div className="hidden sm:flex items-center gap-1 glass rounded-full p-1">
                {tabs.map(t => (
                  <button key={t.id} onClick={()=>setTab(t.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] transition ${tab===t.id?'bg-white text-ink-900':'text-white/65 hover:text-white'}`}>
                    <Icon name={t.icon} className="w-3.5 h-3.5" stroke={1.7}/>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex-1 grid-dots">
              {tab === 'mindmap' && <MindMapView />}
              {tab === 'summary' && <SummaryView />}
              {tab === 'flash' && <FlashcardsView />}
              {tab === 'quiz' && <QuizView />}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="hidden md:block absolute -right-4 top-24 glass-strong rounded-xl px-3 py-2 text-[11.5px] font-mono text-white/70 rotate-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-soft"></span>
          <span>IA generando...</span>
        </div>
      </div>
      <div className="hidden md:block absolute -left-4 bottom-16 glass-strong rounded-xl px-3 py-2 text-[11.5px] -rotate-2 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="grad-text-2 font-semibold">+12 conceptos</span>
          <span className="text-white/40">añadidos</span>
        </div>
      </div>
    </div>
  );
};

// ─── Mind Map view
const MindMapView = () => {
  const center = { x: 320, y: 200, label: 'Célula' };
  const branches = [
    { x: 110, y: 90,  label: 'Membrana', color: '#A78BFA' },
    { x: 540, y: 80,  label: 'Núcleo', color: '#22D3EE' },
    { x: 580, y: 230, label: 'Mitocondria', color: '#F472B6' },
    { x: 510, y: 340, label: 'Ribosomas', color: '#FBBF24' },
    { x: 130, y: 320, label: 'Citoplasma', color: '#86EFAC' },
    { x: 70,  y: 220, label: 'R. Endoplasmático', color: '#A78BFA' },
  ];
  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden">
      <svg viewBox="0 0 640 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="branchG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(167,139,250,0.7)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        {branches.map((b, i) => (
          <path key={i}
            d={`M ${center.x} ${center.y} C ${(center.x+b.x)/2} ${center.y}, ${(center.x+b.x)/2} ${b.y}, ${b.x} ${b.y}`}
            fill="none" stroke="url(#branchG)" strokeWidth="1.2"
            strokeDasharray="600" strokeDashoffset="600"
            style={{ animation: `draw 1.4s ${i*0.15}s ease forwards` }} />
        ))}
        {/* central node */}
        <circle cx={center.x} cy={center.y} r="60" fill="url(#nodeGlow)"/>
        <circle cx={center.x} cy={center.y} r="36" fill="rgba(11,13,20,0.9)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <text x={center.x} y={center.y+5} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500" fontFamily="Geist">{center.label}</text>
        {/* branch nodes */}
        {branches.map((b, i) => (
          <g key={'n'+i} style={{ opacity: 0, animation: `fade-in 0.4s ${0.6 + i*0.15}s ease forwards` }}>
            <circle cx={b.x} cy={b.y} r="6" fill={b.color} opacity="0.25"/>
            <circle cx={b.x} cy={b.y} r="3.5" fill={b.color}/>
            <rect x={b.x - (b.label.length*3.6) - 10} y={b.y - 30} rx="6"
                  width={b.label.length*7.2 + 20} height="20"
                  fill="rgba(17,20,28,0.85)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <text x={b.x} y={b.y - 16} textAnchor="middle" fill="#E5E7EB" fontSize="11" fontFamily="Geist">{b.label}</text>
          </g>
        ))}
      </svg>
      <style>{`@keyframes fade-in { to { opacity: 1; } }`}</style>
      <div className="absolute bottom-3 right-3 glass rounded-md px-2.5 py-1 text-[10.5px] font-mono text-white/50">
        ↔ arrastra · ⌘ + zoom
      </div>
    </div>
  );
};

// ─── Summary view
const SummaryView = () => (
  <div className="p-6 sm:p-8 overflow-y-auto max-h-[420px] text-[14px] leading-relaxed">
    <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-wider text-cyan-400/80 mb-3">
      <Icon name="sparkle" className="w-3.5 h-3.5"/> Resumen generado · 3 min de lectura
    </div>
    <h3 className="text-[22px] font-medium tracking-tight mb-4">La célula como unidad básica de la vida</h3>
    <p className="text-white/70 mb-4">
      La <span className="text-violet-300 bg-violet-500/10 px-1 rounded">célula</span> es la unidad estructural y funcional de todo ser vivo. Existen dos tipos principales: <span className="text-cyan-300 bg-cyan-400/10 px-1 rounded">procariotas</span> (sin núcleo definido) y <span className="text-cyan-300 bg-cyan-400/10 px-1 rounded">eucariotas</span> (con núcleo verdadero).
    </p>
    <div className="my-4 border-l-2 border-violet-500/50 pl-4 text-white/80 italic font-serif text-[15px]">
      "Toda célula proviene de otra célula" — Rudolf Virchow, 1855.
    </div>
    <p className="text-white/70 mb-4">
      Los organelos clave incluyen el <span className="text-pink-300 bg-pink-400/10 px-1 rounded">núcleo</span>, donde se almacena el ADN; las <span className="text-pink-300 bg-pink-400/10 px-1 rounded">mitocondrias</span>, productoras de energía mediante respiración celular; y los <span className="text-pink-300 bg-pink-400/10 px-1 rounded">ribosomas</span>, encargados de la síntesis de proteínas.
    </p>
    <div className="grid grid-cols-3 gap-2 mt-5">
      {[{k:'Conceptos clave', v:'12'},{k:'Palabras', v:'847'},{k:'Nivel', v:'Univ.'}].map(s=>(
        <div key={s.k} className="glass rounded-lg p-3">
          <div className="text-[10.5px] font-mono uppercase tracking-wider text-white/40">{s.k}</div>
          <div className="text-[18px] mt-1">{s.v}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Flashcards view
const FlashcardsView = () => {
  const cards = [
    { q: '¿Qué función cumplen las mitocondrias?', a: 'Producir energía (ATP) mediante respiración celular.' },
    { q: '¿Qué diferencia hay entre procariotas y eucariotas?', a: 'Las eucariotas poseen núcleo verdadero; las procariotas no.' },
    { q: '¿Quién postuló la teoría celular?', a: 'Schleiden, Schwann y Virchow (s. XIX).' },
  ];
  const [idx, setIdx] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const next = () => { setFlip(false); setIdx((idx+1)%cards.length); };
  return (
    <div className="p-6 sm:p-10 grid place-items-center min-h-[420px]">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-4 text-[11px] font-mono text-white/40">
          <span>Tarjeta {idx+1} de {cards.length}</span>
          <span>Capítulo 4</span>
        </div>
        <div onClick={()=>setFlip(v=>!v)}
          className="relative cursor-pointer glass-strong rounded-2xl p-8 min-h-[200px] flex items-center justify-center text-center select-none card-hover">
          <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-white/30">
            {flip ? 'Respuesta' : 'Pregunta'}
          </div>
          <div className="text-[18px] sm:text-[20px] leading-snug">
            {flip ? cards[idx].a : cards[idx].q}
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/30">click para girar</div>
        </div>
        <div className="flex items-center justify-between mt-5 gap-3">
          <button className="btn-ghost rounded-full px-4 py-2 text-[12.5px]">No la sabía</button>
          <button onClick={next} className="btn-ghost rounded-full px-4 py-2 text-[12.5px]">Más o menos</button>
          <button onClick={next} className="btn-primary rounded-full px-4 py-2 text-[12.5px] flex items-center gap-1">
            La sabía <Icon name="check" className="w-3.5 h-3.5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Quiz view
const QuizView = () => {
  const opts = [
    { l: 'A', t: 'Síntesis de proteínas',       correct: false },
    { l: 'B', t: 'Producción de ATP por respiración celular', correct: true },
    { l: 'C', t: 'Replicación del ADN',          correct: false },
    { l: 'D', t: 'Almacenamiento de lípidos',    correct: false },
  ];
  const [sel, setSel] = React.useState(null);
  return (
    <div className="p-6 sm:p-8 min-h-[420px]">
      <div className="flex items-center justify-between text-[11px] font-mono mb-4">
        <span className="text-cyan-400/80">Pregunta 2 de 10</span>
        <span className="text-white/40">⏱ 00:42</span>
      </div>
      <h3 className="text-[20px] sm:text-[22px] font-medium tracking-tight mb-6 max-w-2xl">
        ¿Cuál es la función principal de las mitocondrias dentro de la célula eucariota?
      </h3>
      <div className="grid gap-2.5 max-w-2xl">
        {opts.map(o => {
          const isSel = sel === o.l;
          const show = sel !== null;
          const state = show ? (o.correct ? 'right' : isSel ? 'wrong' : 'idle') : 'idle';
          return (
            <button key={o.l} onClick={()=>setSel(o.l)}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition
                ${state==='right' ? 'bg-emerald-400/10 border-emerald-400/40' :
                  state==='wrong' ? 'bg-rose-500/10 border-rose-500/40' :
                  isSel ? 'bg-white/[0.06] border-white/20' :
                  'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/15'}`}>
              <span className={`w-7 h-7 grid place-items-center rounded-md font-mono text-[12px] border
                ${state==='right' ? 'bg-emerald-400 text-ink-900 border-emerald-400' :
                  state==='wrong' ? 'bg-rose-500 text-white border-rose-500' :
                  'border-white/15 text-white/60'}`}>
                {state==='right'? '✓' : state==='wrong'? '✕' : o.l}
              </span>
              <span className="text-[14.5px]">{o.t}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-4 text-[11.5px] font-mono text-white/40">
        <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-400 to-cyan-400" style={{width:'20%'}}></div>
        </div>
        <span>20%</span>
      </div>
    </div>
  );
};

window.ProductMockup = ProductMockup;
