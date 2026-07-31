import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Images } from 'lucide-react';
import { applyImageFallback } from '../../utils/imageFallback.js';
import { fadeInUp } from '../../utils/motion.js';

function ProjectCard({ project, onOpen }) {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <motion.article variants={fadeInUp} className="panel overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={project.mainImage}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          onError={applyImageFallback}
          className="h-full w-full object-contain p-2 transition duration-500 hover:scale-[1.02]"
        />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-xs font-extrabold text-blue-700 shadow-soft">
            Projet clé
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-slate-950">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="tag">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onOpen(project)} className="btn btn-primary">
            Voir les détails
            <Images size={17} aria-hidden="true" />
          </button>
          {hasGithub && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
              <Github size={17} aria-hidden="true" />
            </a>
          )}
          {hasDemo && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Demo
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
