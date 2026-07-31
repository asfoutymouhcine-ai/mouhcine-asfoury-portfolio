import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Retour en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="focus-ring fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-900 shadow-soft transition hover:-translate-y-0.5 hover:text-blue-700"
    >
      <ArrowUp size={19} aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
