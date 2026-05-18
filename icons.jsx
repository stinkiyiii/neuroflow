// Minimal stroke icon set — original
const Icon = ({ name, className = "w-5 h-5", stroke = 1.5 }) => {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    sparkle: <g {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5L15 9M9 15l-2.5 2.5"/></g>,
    brain: <g {...c}><path d="M9 4.5a3 3 0 0 0-3 3v.5a3 3 0 0 0-1.5 5.6V15a3 3 0 0 0 4.5 2.6"/><path d="M15 4.5a3 3 0 0 1 3 3v.5a3 3 0 0 1 1.5 5.6V15a3 3 0 0 1-4.5 2.6"/><path d="M12 5v14"/></g>,
    map: <g {...c}><circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="6" r="1.5"/><circle cx="19" cy="6" r="1.5"/><circle cx="5" cy="18" r="1.5"/><circle cx="19" cy="18" r="1.5"/><path d="M6.3 7l4 3.5M17.7 7l-4 3.5M6.3 17l4-3.5M17.7 17l-4-3.5"/></g>,
    cards: <g {...c}><rect x="3" y="6" width="13" height="13" rx="2"/><path d="M7 3h11a2 2 0 0 1 2 2v11"/></g>,
    quiz: <g {...c}><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1-1.5 2.4"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></g>,
    bolt: <g {...c}><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></g>,
    arrow: <g {...c}><path d="M5 12h14M13 5l7 7-7 7"/></g>,
    check: <g {...c}><path d="M5 12.5 10 17 19 7"/></g>,
    play: <g {...c}><path d="M8 5v14l11-7L8 5Z"/></g>,
    chev: <g {...c}><path d="M6 9l6 6 6-6"/></g>,
    upload: <g {...c}><path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/></g>,
    wand: <g {...c}><path d="M15 4v3M20 9h-3M17 12l3 3M4 20l9-9M11 9l4 4"/></g>,
    target: <g {...c}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></g>,
    layers: <g {...c}><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></g>,
    shield: <g {...c}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/></g>,
    globe: <g {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></g>,
    clock: <g {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
    file: <g {...c}><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></g>,
    twitter: <g {...c}><path d="M4 4l7 9-7 7h2l6-6 5 6h4l-7.5-9.5L19 4h-2l-5 5-4-5H4Z"/></g>,
    github: <g {...c}><path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-4a3 3 0 0 0-1-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.5-3.5 5 5 0 0 0-.1-3.5s-1.2-.3-4 1.4a13 13 0 0 0-7 0c-2.8-1.7-4-1.4-4-1.4a5 5 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.2 6 6.5A3 3 0 0 0 9 18v4"/></g>,
    discord: <g {...c}><path d="M18 5s-1.5-1-3-1.2l-.3.6c1.7.4 2.5 1 3.3 1.7-1.5-.8-3-1.4-5-1.4s-3.5.6-5 1.4c.8-.6 1.7-1.3 3.3-1.7L11 4C9.5 4.2 8 5 8 5s-2.5 3.5-3 9c1.4 1.6 3.5 1.7 3.5 1.7l.8-1.1c-1.3-.4-2.1-1-2.1-1L8 14c2.5 1.5 5 1.5 7.7 0l.8.6s-.8.6-2.1 1l.8 1.1s2.1-.1 3.5-1.7c-.5-5.5-3-9-3-9Z"/><circle cx="10" cy="11" r="1" fill="currentColor"/><circle cx="14" cy="11" r="1" fill="currentColor"/></g>,
    instagram: <g {...c}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></g>,
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
};

window.Icon = Icon;
