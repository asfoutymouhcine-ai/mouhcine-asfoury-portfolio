import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, X } from 'lucide-react';
import { applyImageFallback } from '../../utils/imageFallback.js';

function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = useMemo(() => (project ? [project.mainImage, ...project.gallery] : []), [project]);
  const hasGithub = Boolean(project?.githubUrl);
  const hasDemo = Boolean(project?.demoUrl);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [images.length, onClose, project]);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/65 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du projet ${project.title}`}
          onMouseDown={onClose}
        >
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-soft"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Projet</p>
                <h3 className="mt-1 text-xl font-extrabold text-slate-950">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer les détails du projet"
                className="focus-ring grid size-10 place-items-center rounded-md border border-slate-200 text-slate-700 hover:text-slate-950"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-slate-50 p-5">
                <div className="relative">
                  <img
                    src={images[activeIndex]}
                    alt={`Capture ${activeIndex + 1} du projet ${project.title}`}
                    loading="lazy"
                    onError={applyImageFallback}
                    className="aspect-[16/10] w-full rounded-md border border-slate-200 bg-white object-contain"
                  />
                  {images.length > 1 && (
                    <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                      <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Image précédente"
                        className="focus-ring grid size-10 place-items-center rounded-md bg-white/90 text-slate-950 shadow-soft hover:text-blue-700"
                      >
                        <ArrowLeft size={18} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        aria-label="Image suivante"
                        className="focus-ring grid size-10 place-items-center rounded-md bg-white/90 text-slate-950 shadow-soft hover:text-blue-700"
                      >
                        <ArrowRight size={18} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Afficher la capture ${index + 1}`}
                        className={`focus-ring rounded-md border bg-white p-1 ${
                          activeIndex === index ? 'border-blue-600' : 'border-slate-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          onError={applyImageFallback}
                          className="aspect-[16/10] w-full rounded object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="leading-7 text-slate-600">{project.fullDescription}</p>

                <div className="mt-6 grid gap-5">
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950">Problème</h4>
                    <p className="mt-2 leading-7 text-slate-600">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950">Solution</h4>
                    <p className="mt-2 leading-7 text-slate-600">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950">Fonctionnalités</h4>
                    <ul className="mt-3 grid gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm font-semibold text-slate-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tag">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {hasGithub && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      GitHub
                      <Github size={17} aria-hidden="true" />
                    </a>
                  )}
                  {hasDemo && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Démonstration
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
