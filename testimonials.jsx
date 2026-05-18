const Testimonials = () => {
  const stats = [
    { n: '48K+', l: 'Estudiantes activos' },
    { n: '2.4M', l: 'Apuntes procesados' },
    { n: '94%',  l: 'Mejora promedio' },
    { n: '4.9',  l: 'Rating App Store' },
  ];

  const testimonials = [
    {
      q: 'Pasé de reprobar Cálculo II a sacar 9.4. Los mapas mentales me hacen ver patrones que en el libro no se notaban.',
      n: 'Sofía Castillo',
      r: 'Ing. Industrial · ITESM',
      av: 'linear-gradient(135deg,#A78BFA,#7C3AED)',
      i: 'S',
    },
    {
      q: 'Antes pasaba 4 horas haciendo flashcards. NeuroFlow las genera en 12 segundos y son MEJORES que las mías.',
      n: 'Diego Ramírez',
      r: 'Medicina · UNAM',
      av: 'linear-gradient(135deg,#22D3EE,#0891B2)',
      i: 'D',
    },
    {
      q: 'Subí 47 PDFs el día antes del final de Historia. La IA armó un timeline perfecto. Aprobé con 8.7.',
      n: 'Camila Ortiz',
      r: 'Relaciones Int. · UBA',
      av: 'linear-gradient(135deg,#F472B6,#DB2777)',
      i: 'C',
    },
    {
      q: 'Lo uso para mi TFG. Sube papers, pregúntale lo que sea y te responde con citas reales. Es brutal.',
      n: 'Mateo Fernández',
      r: 'Psicología · Universitat de Barcelona',
      av: 'linear-gradient(135deg,#FBBF24,#D97706)',
      i: 'M',
    },
    {
      q: 'Tengo TDAH. Los quizzes adaptativos me mantienen enganchada de verdad. Estudiar ya no se siente como un castigo.',
      n: 'Renata Morales',
      r: 'Comunicación · Tec de Monterrey',
      av: 'linear-gradient(135deg,#86EFAC,#16A34A)',
      i: 'R',
    },
    {
      q: 'El plan de estudio inteligente me cambió la vida. Sé exactamente qué repasar cada día. Cero ansiedad pre-examen.',
      n: 'Lucas Herrera',
      r: 'Derecho · Universidad Austral',
      av: 'linear-gradient(135deg,#F87171,#DC2626)',
      i: 'L',
    },
  ];

  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="// Testimonios"
          title={<>Lo que dicen <span className="grad-text-2 font-serif italic">48,000+ estudiantes</span> reales.</>}
        />

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-12 glass">
          {stats.map((s,i)=>(
            <div key={i} className="bg-ink-950 p-6 sm:p-8">
              <div className="font-serif text-[40px] sm:text-[52px] leading-none grad-text-2">{s.n}</div>
              <div className="mt-2 text-[12.5px] text-white/55">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Testimonials masonry-ish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t,i)=>(
            <div key={i} className={`glass rounded-2xl p-6 card-hover ${i===0?'lg:row-span-1':''}`}>
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(n => (
                  <svg key={n} viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fill="#22D3EE" d="m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.73 1.64 7.03Z"/></svg>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-white/85">"{t.q}"</p>
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full grid place-items-center text-[13px] font-medium text-white"
                     style={{background: t.av}}>{t.i}</div>
                <div>
                  <div className="text-[13.5px] font-medium">{t.n}</div>
                  <div className="text-[12px] text-white/45">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
