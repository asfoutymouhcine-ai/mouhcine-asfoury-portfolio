import { useMemo, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/profile.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navigation.map((item) => item.href.replace('#', '')), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Accueil">
          <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-sm font-extrabold text-white">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-extrabold text-slate-950">{profile.name}</span>
            <span className="block text-xs font-semibold text-slate-500">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = activeId === item.href.replace('#', '');

            return (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={profile.cvUrl} download className="btn btn-secondary">
            <Download size={17} aria-hidden="true" />
            Télécharger mon CV
          </a>
        </div>

        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={profile.cvUrl} download className="btn btn-primary mt-2">
              <Download size={17} aria-hidden="true" />
              Télécharger mon CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
