import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle.jsx';
import { education } from '../../data/education.js';
import { applyImageFallback } from '../../utils/imageFallback.js';
import { fadeInUp, staggerContainer } from '../../utils/motion.js';

function Education() {
  return (
    <section id="education" className="bg-white">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Formation"
          title="Un parcours académique présenté avec clarté."
          description="La timeline met en avant les diplômes, établissements, périodes et compétences principales."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5"
        >
          {education.map((item) => (
            <motion.article key={`${item.diploma}-${item.startYear}`} variants={fadeInUp} className="relative border-l-2 border-slate-200 pl-6">
              <span className="absolute -left-[9px] top-1 size-4 rounded-full border-4 border-white bg-blue-700" />
              <div className="panel p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={`Logo ${item.institution}`}
                      loading="lazy"
                      onError={applyImageFallback}
                      className="size-20 rounded-md border border-slate-200 object-contain p-2"
                    />
                  )}
                  <div>
                    {item.period && <p className="text-sm font-extrabold text-blue-700">{item.period}</p>}
                    <h3 className="text-xl font-extrabold text-slate-950">{item.diploma}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">
                      {item.institution} · {item.location}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-500">{item.specialization}</p>
                    <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
