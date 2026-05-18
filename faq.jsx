const FAQ = () => {
  const items = [
    {
      q: '¿NeuroFlow reemplaza a mi profesor?',
      a: 'No. NeuroFlow es tu compañero de estudio personal. Aprende mejor con tu profesor, pero recuerda más con nosotros. Pensamos en NeuroFlow como una calculadora: no reemplaza saber matemáticas, las amplifica.',
    },
    {
      q: '¿Qué tipo de archivos puedo subir?',
      a: 'PDFs, imágenes (fotos de cuaderno o pizarra), Word, slides, archivos de texto, links a YouTube y audios de hasta 3 horas. Soportamos hasta 200 MB por archivo en el plan Pro.',
    },
    {
      q: '¿La IA inventa información (alucina)?',
      a: 'NeuroFlow está atado a tu material: solo genera contenido a partir de los documentos que subes, con citas a la página exacta. Si no encuentra algo en tu material, te lo dice — no inventa.',
    },
    {
      q: '¿Puedo usarlo offline?',
      a: 'Las apps de iOS y Android descargan flashcards y resúmenes para repaso offline. La generación de contenido nuevo requiere internet por temas de cómputo.',
    },
    {
      q: '¿Mis apuntes son privados?',
      a: 'Totalmente. Cifrado AES-256 en reposo y TLS en tránsito. Nunca entrenamos modelos con tu contenido. Puedes borrar tu cuenta y todos tus datos con un clic.',
    },
    {
      q: '¿Hay descuento para estudiantes?',
      a: 'Sí — verifica tu email .edu (o equivalente) y obtén 50% off para siempre en cualquier plan. Si tu universidad ya tiene convenio, es 100% gratis.',
    },
    {
      q: '¿Cómo funciona la garantía?',
      a: 'Prueba Pro 7 días gratis sin tarjeta. Después, si en 30 días no estás 100% conforme, te devolvemos el dinero. Sin preguntas.',
    },
  ];
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="// FAQ"
          title={<>Preguntas <span className="grad-text-2 font-serif italic">frecuentes</span>.</>}
          sub="Todo lo que querés saber antes de empezar."
        />

        <div className="glass rounded-2xl overflow-hidden divide-y divide-white/[0.06]">
          {items.map((it, i) => <FAQItem key={i} {...it} />)}
        </div>

        <div className="mt-8 text-center text-[13.5px] text-white/50">
          ¿Tienes otra pregunta? <a href="#contact" className="grad-text-2 hover:underline">Escríbenos →</a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={()=>setOpen(v=>!v)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group">
        <span className={`text-[15.5px] sm:text-[16.5px] transition ${open?'text-white':'text-white/85 group-hover:text-white'}`}>{q}</span>
        <span className={`shrink-0 grid place-items-center w-7 h-7 rounded-full transition ${open?'bg-gradient-to-br from-violet-500 to-cyan-400 text-ink-900':'bg-white/[0.06] text-white/60'}`}>
          <Icon name="chev" className={`w-3.5 h-3.5 transition ${open?'rotate-180':''}`} stroke={2}/>
        </span>
      </button>
      <div className="grid transition-all duration-300 ease-out" style={{gridTemplateRows: open ? '1fr' : '0fr'}}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[14.5px] text-white/60 leading-relaxed max-w-2xl">{a}</div>
        </div>
      </div>
    </div>
  );
};

window.FAQ = FAQ;
