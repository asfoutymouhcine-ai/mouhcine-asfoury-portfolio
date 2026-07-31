import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motion.js';

function SectionTitle({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const titleClass = tone === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionClass = tone === 'dark' ? 'text-white/70' : 'text-slate-600';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={alignment}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className={`section-title ${titleClass}`}>{title}</h2>
      {description && <p className={`section-description ${descriptionClass} ${alignment}`}>{description}</p>}
    </motion.div>
  );
}

export default SectionTitle;
