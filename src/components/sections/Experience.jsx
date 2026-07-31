import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import SectionTitle from '../common/SectionTitle.jsx';
import { experience } from '../../data/experience.js';
import { fadeInUp, staggerContainer } from '../../utils/motion.js';

function Experience() {
  return (
    <section id="experience">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Expérience"
          title="Missions, réalisations et environnements techniques."
          description="Une section pensée pour présenter clairement les responsabilités et preuves d’impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5"
        >
          {experience.map((item) => (
            <motion.article key={`${item.position}-${item.company}`} variants={fadeInUp} className="panel p-5">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                    <BriefcaseBusiness size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">{item.position}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">
                      {item.company} · {item.location}
                    </p>
                  </div>
                </div>
                {(item.startDate || item.endDate || item.type) && (
                  <p className="rounded-md bg-blue-50 px-3 py-2 text-sm font-extrabold text-blue-700">
                    {[item.type, [item.startDate, item.endDate].filter(Boolean).join(' - ')].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950">Missions</h4>
                  <ul className="mt-3 grid gap-2">
                    {item.missions.map((mission) => (
                      <li key={mission} className="text-sm font-semibold text-slate-600">
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950">Réalisations</h4>
                  <ul className="mt-3 grid gap-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm font-semibold text-slate-600">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
