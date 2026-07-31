import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle.jsx';
import { profile, profileFacts } from '../../data/profile.js';
import { fadeInUp, staggerContainer } from '../../utils/motion.js';

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="À propos"
            title="Un développeur Full Stack orienté produit, qualité et maintenabilité."
            description="Mon approche combine compréhension métier, architecture claire, exécution propre et amélioration continue."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5"
          >
            <motion.article variants={fadeInUp} className="panel p-6">
              <p className="text-lg leading-8 text-slate-700">{profile.about}</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">{profile.ambition}</p>
            </motion.article>

            <motion.div variants={fadeInUp} className="grid gap-3 sm:grid-cols-2">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-950">
                    <CheckCircle2 size={17} className="text-emerald-600" aria-hidden="true" />
                    {fact.label}
                  </div>
                      {fact.href ? (
                        <a href={fact.href} className="mt-2 block text-sm font-semibold text-slate-600 hover:text-blue-700">
                          {fact.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm font-semibold text-slate-600">{fact.value}</p>
                      )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
