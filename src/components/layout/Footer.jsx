import { navigation, profile } from '../../data/profile.js';
import SocialLinks from '../common/SocialLinks.jsx';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold text-slate-950">{profile.name}</p>
          <p className="mt-2 text-sm font-semibold text-slate-500">{profile.role}</p>
          <div className="mt-4 grid gap-1 text-sm font-semibold text-slate-600">
            <a href={profile.emailLink} className="hover:text-blue-700">{profile.email}</a>
            <a href={profile.phoneLink} className="hover:text-blue-700">{profile.phoneDisplay}</a>
          </div>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div className="grid gap-5 sm:justify-items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-600">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
