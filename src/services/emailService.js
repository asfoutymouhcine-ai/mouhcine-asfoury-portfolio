import emailjs from '@emailjs/browser';
import { profile } from '../data/profile.js';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail(formValues) {
  const hasEmailJsConfig = Boolean(serviceId && templateId && publicKey);

  if (!hasEmailJsConfig) {
    const subject = encodeURIComponent(formValues.subject || `Contact portfolio - ${formValues.name}`);
    const body = encodeURIComponent(
      `${formValues.message}\n\nNom : ${formValues.name}\nEmail : ${formValues.email}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return { provider: 'mailto' };
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: formValues.name,
      from_email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
    },
    { publicKey },
  );

  return { provider: 'emailjs' };
}
