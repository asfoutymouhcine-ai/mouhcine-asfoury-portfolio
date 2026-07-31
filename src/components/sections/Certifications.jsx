import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import SectionTitle from '../common/SectionTitle.jsx';
import CertificationCard from './CertificationCard.jsx';
import { certifications } from '../../data/certifications.js';
import { staggerContainer } from '../../utils/motion.js';
import { applyImageFallback } from '../../utils/imageFallback.js';

function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    if (!selectedCertification) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertification(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedCertification]);

  const selectedTitle = selectedCertification?.title?.trim() || 'Certificat professionnel';
  const selectedImage = selectedCertification?.image?.trim();
  const selectedCredentialUrl = selectedCertification?.credentialUrl?.trim();

  return (
    <section id="certifications">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Certifications"
          title="Des certifications visibles, organisees et faciles a consulter."
          description="Les certificats reels sont affiches sans inventer les informations manquantes."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              onOpen={setSelectedCertification}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            className="fixed inset-0 z-[85] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certification-modal-title"
            onMouseDown={() => setSelectedCertification(null)}
          >
            <motion.div
              className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-soft"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4">
                <h3 id="certification-modal-title" className="text-lg font-extrabold text-slate-950">
                  {selectedTitle}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedCertification(null)}
                  aria-label="Fermer le certificat"
                  className="focus-ring grid size-10 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-slate-700"
                  autoFocus
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="bg-slate-50 p-4 sm:p-5">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={`Certificat ${selectedTitle}`}
                    loading="lazy"
                    onError={applyImageFallback}
                    className="mx-auto h-auto w-full rounded-md border border-slate-200 bg-white object-contain"
                  />
                )}

                {selectedCredentialUrl && (
                  <a
                    href={selectedCredentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary mt-4 w-full sm:w-auto"
                  >
                    Verifier le certificat
                    <ExternalLink size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;
