const Footer = () => {
  const cols = [
    { title: 'Producto', links: ['Mapas mentales','Flashcards','Quizzes','Resúmenes','Plan de estudio','Cambios'] },
    { title: 'Estudiantes', links: ['Estudiantes universitarios','Preparatoria','Idiomas','Medicina','Derecho','Ingeniería'] },
    { title: 'Recursos', links: ['Blog','Centro de ayuda','Comunidad','Plantillas','Para profesores','API'] },
    { title: 'Compañía', links: ['Sobre nosotros','Empleos','Prensa','Contacto','Términos','Privacidad'] },
  ];
  return (
    <footer className="relative pt-20 pb-10 mt-12 border-t border-white/[0.06] overflow-hidden">
      {/* Big CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
        <div className="relative glass-strong rounded-3xl overflow-hidden p-10 sm:p-16 text-center">
          <div className="absolute inset-0 -z-0 opacity-70 pointer-events-none">
            <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-violet-500/30 blur-3xl"></div>
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-cyan-400/25 blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400/80 mb-4">// Empieza hoy</div>
            <h2 className="font-medium text-[36px] sm:text-[56px] leading-[1.05] tracking-[-0.025em] max-w-3xl mx-auto">
              <span className="grad-text">Tu próximo examen</span><br/>
              <span className="text-white">empieza a estudiarse <span className="grad-text-2 font-serif italic">ahora</span>.</span>
            </h2>
            <p className="mt-5 text-white/55 text-[16px] max-w-xl mx-auto">
              Únete a 48,000+ estudiantes que ya cambiaron su forma de estudiar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#signup" className="btn-primary inline-flex items-center justify-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-full">
                Empieza gratis <Icon name="arrow" className="w-4 h-4"/>
              </a>
              <a href="#demo" className="btn-ghost inline-flex items-center justify-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-full">
                Ver demo (1:24)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-[13.5px] text-white/50 max-w-xs leading-relaxed">
              Convierte cualquier apunte en mapas mentales, flashcards, resúmenes y quizzes con IA.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {['twitter','github','instagram','discord'].map(s => (
                <a key={s} href={`#${s}`} className="w-9 h-9 grid place-items-center rounded-full glass text-white/60 hover:text-white hover:border-white/20 transition">
                  <Icon name={s} className="w-4 h-4"/>
                </a>
              ))}
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/40 mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(l => (
                  <li key={l}>
                    <a href={`#${l}`} className="text-[13px] text-white/70 hover:text-white transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hair"></div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px]">
          <div className="text-white/40 font-mono">© 2026 NeuroFlow Labs · Hecho con 🧠 en Ciudad de México.</div>
          <div className="flex items-center gap-5 text-white/50">
            <a href="#status" className="flex items-center gap-2 hover:text-white transition">
              <span className="relative flex w-2 h-2"><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span><span className="relative w-2 h-2 rounded-full bg-emerald-400"></span></span>
              Todos los sistemas operativos
            </a>
            <a href="#privacy" className="hover:text-white transition">Privacidad</a>
            <a href="#terms" className="hover:text-white transition">Términos</a>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-16 select-none pointer-events-none">
          <div className="text-center font-medium tracking-[-0.04em] leading-none text-[18vw] grad-text opacity-[0.08]">NeuroFlow</div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
