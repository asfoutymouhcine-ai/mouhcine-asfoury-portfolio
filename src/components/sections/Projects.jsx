import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import { projects } from '../../data/projects.js';
import { staggerContainer } from '../../utils/motion.js';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-white">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Réalisations"
          title="Des projets structurés pour montrer ton raisonnement Full Stack."
          description="Chaque projet contient le problème, la solution, les fonctionnalités, les technologies, une image principale et une galerie."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-6 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.mainImage}`} project={project} onOpen={setSelectedProject} />
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
