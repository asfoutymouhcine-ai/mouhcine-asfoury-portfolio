import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionTitle from '../common/SectionTitle.jsx';
import { profile } from '../../data/profile.js';
import { sendContactEmail } from '../../services/emailService.js';
import { fadeInUp } from '../../utils/motion.js';

const contactLinks = [
  { label: 'Email', value: profile.email, href: profile.emailLink, icon: Mail },
  { label: 'Téléphone', value: profile.phoneDisplay, href: profile.phoneLink, icon: Phone },
  { label: 'LinkedIn', value: 'Profil LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'Profil GitHub', href: profile.github, icon: Github },
  { label: 'Instagram', value: 'Profil Instagram', href: profile.instagram, icon: Instagram },
  { label: 'Localisation', value: profile.location, href: '#contact', icon: MapPin },
];

function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const result = await sendContactEmail(formValues);
      setStatus(result.provider === 'mailto' ? 'mailto' : 'sent');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Prêt à échanger sur une opportunité ou un projet."
              description="Contact direct par email, téléphone, LinkedIn ou GitHub. Le formulaire utilise EmailJS si les variables sont configurées, sinon il ouvre un email prérempli."
              tone="dark"
            />
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8 grid gap-3"
            >
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="focus-ring flex items-center gap-3 rounded-md border border-white/15 bg-white/[0.07] px-4 py-3 transition hover:bg-white/[0.12]"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/55">{label}</span>
                    <span className="block text-sm font-bold text-white">{value}</span>
                  </span>
                </a>
              ))}
            </motion.div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.emailLink} className="btn btn-secondary">
                Envoyer un email
                <Mail size={17} aria-hidden="true" />
              </a>
              <a href={profile.phoneLink} className="btn btn-secondary">
                Appeler
                <Phone size={17} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Voir LinkedIn
                <Linkedin size={17} aria-hidden="true" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Voir GitHub
                <Github size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/15 bg-white p-5 text-slate-950 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Nom
                <input name="name" required className="field-input" placeholder="Votre nom" />
              </label>
              <label className="field-label">
                Email
                <input name="email" type="email" required className="field-input" placeholder="votre@email.com" />
              </label>
            </div>
            <label className="field-label mt-4">
              Sujet
              <input name="subject" required className="field-input" placeholder="Sujet du message" />
            </label>
            <label className="field-label mt-4">
              Message
              <textarea name="message" required rows="6" className="field-input resize-none" placeholder="Votre message..." />
            </label>
            <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70">
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
              <Send size={18} aria-hidden="true" />
            </button>
            {status === 'sent' && <p className="mt-3 text-sm font-semibold text-emerald-700">Message envoyé avec succès.</p>}
            {status === 'mailto' && <p className="mt-3 text-sm font-semibold text-blue-700">Votre application email a été ouverte.</p>}
            {status === 'error' && <p className="mt-3 text-sm font-semibold text-red-700">Envoi impossible. Utilisez le lien email direct.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
