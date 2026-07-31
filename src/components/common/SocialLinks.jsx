import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile.js';

const links = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'Email', href: profile.emailLink, icon: Mail },
];

function SocialLinks({ variant = 'light' }) {
  const className =
    variant === 'dark'
      ? 'border-white/15 bg-white/[0.08] text-white hover:bg-white/[0.14]'
      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700';

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={`focus-ring inline-grid size-11 place-items-center rounded-md border transition ${className}`}
        >
          <Icon size={19} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
