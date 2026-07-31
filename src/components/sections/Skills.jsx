import { motion } from 'framer-motion';
import { Boxes, Code2, Database, GitBranch, Layers3 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle.jsx';
import { skillGroups } from '../../data/skills.js';
import { fadeInUp, staggerContainer } from '../../utils/motion.js';

const icons = {
  Frontend: Layers3,
  Backend: Code2,
  'Bases de données': Database,
  'DevOps et outils': GitBranch,
  'Conception et méthodologies': Boxes,
};

function Skills() {
  return (
    <section id="skills">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Compétences"
          title="Une stack complète, organisée par responsabilité."
          description="Les compétences sont séparées des composants pour rester simples à mettre à jour selon ton évolution."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = icons[group.category] ?? Code2;

            return (
              <motion.article key={group.category} variants={fadeInUp} className="panel p-5">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">{group.category}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{group.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
