import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { applyImageFallback } from '../../utils/imageFallback.js';
import { fadeInUp } from '../../utils/motion.js';

function CertificationCard({ certification, onOpen }) {
  const title = certification.title?.trim();
  const organization = certification.organization?.trim();
  const date = certification.date?.trim();
  const image = certification.image?.trim();
  const credentialUrl = certification.credentialUrl?.trim();
  const skills = Array.isArray(certification.skills)
    ? certification.skills.filter((skill) => Boolean(skill?.trim()))
    : [];
  const meta = [organization, date].filter(Boolean).join(' - ');
  const canOpenCertificate = Boolean(image || credentialUrl);
  const alt = title ? `Certificat ${title}` : 'Certificat professionnel';

  return (
    <motion.article variants={fadeInUp} className="panel p-5">
      <div className="flex items-start gap-4">
        {image && (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            onError={applyImageFallback}
            className="h-20 w-24 shrink-0 rounded-md border border-slate-200 bg-white object-contain p-1"
          />
        )}
        <div>
          {meta && (
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
              <Award size={15} aria-hidden="true" />
              {meta}
            </div>
          )}
          {title && <h3 className="mt-2 text-lg font-extrabold text-slate-950">{title}</h3>}
        </div>
      </div>

      {skills.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      )}

      {canOpenCertificate && (
        <button type="button" onClick={() => onOpen(certification)} className="btn btn-secondary mt-6 w-full">
          Afficher le certificat
          <ExternalLink size={17} aria-hidden="true" />
        </button>
      )}
    </motion.article>
  );
}

export default CertificationCard;
