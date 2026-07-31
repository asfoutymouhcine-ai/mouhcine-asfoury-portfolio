import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Eye, Mail, MapPin } from 'lucide-react';
import SocialLinks from '../common/SocialLinks.jsx';
import { profile } from '../../data/profile.js';
import { applyImageFallback } from '../../utils/imageFallback.js';
import { fadeInUp, staggerContainer } from '../../utils/motion.js';

function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.p variants={fadeInUp} className="section-eyebrow">
          Portfolio professionnel
        </motion.p>
        <motion.h1 variants={fadeInUp} className="font-display text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
          {profile.name}
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-xl font-extrabold text-blue-700 sm:text-2xl">
          {profile.role}
        </motion.p>
        <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600">
          {profile.subtitle}
        </motion.p>
        <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {profile.headline}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a href={profile.cvUrl} download className="btn btn-secondary">
            Télécharger mon CV
            <Download size={18} aria-hidden="true" />
          </a>
          <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Voir mon CV
            <Eye size={18} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Me contacter
            <Mail size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <SocialLinks />
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
            <MapPin size={17} aria-hidden="true" />
            {profile.location}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="lg:justify-self-end"
      >
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-4 rounded-lg bg-blue-100/70" />
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            <img
              src={profile.photo}
              alt={`Photo professionnelle de ${profile.name}, développeur Full Stack`}
              loading="eager"
              onError={(event) => applyImageFallback(event, profile.photoFallback)}
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
