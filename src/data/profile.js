export const profile = {
  name: 'Mouhcine Asfoury',
  initials: 'MA',
  role: 'Développeur Full Stack',
  title: 'Développeur Full Stack',
  subtitle:
    'Diplômé d’une Licence en Informatique Appliquée, option Développement Web et Logiciel',
  specialty: 'Développement web Full Stack',
  headline:
    'Je conçois des applications web modernes, performantes et maintenables, du frontend jusqu’au backend.',
  about:
    'Je suis Mouhcine Asfoury, développeur Full Stack diplômé d’une Licence en Informatique Appliquée, option Développement Web et Logiciel. Je conçois des applications web modernes, performantes et adaptées aux besoins des utilisateurs.',
  ambition:
    'Je travaille sur le frontend, le backend, les bases de données, les API REST ainsi que la conteneurisation avec Docker. Je porte une attention particulière à la qualité du code, à l’expérience utilisateur, à l’organisation des projets et à la maintenabilité des solutions développées.',
  email: 'asfourymouhcine@gmail.com',
  emailLink: 'mailto:asfourymouhcine@gmail.com',
  phoneDisplay: '+212 6 89 58 60 30',
  phoneLocal: '0689586030',
  phoneLink: 'tel:+212689586030',
  location: 'Casablanca, Maroc',
  diploma: 'Licence en Informatique Appliquée',
  specialization: 'Développement Web et Logiciel',
  availability: '',
  languages: '',
  linkedin: 'https://www.linkedin.com/in/asfoury-mouhcine-960075372',
  github: 'https://github.com/asfourymouhcine',
  instagram: 'https://www.instagram.com/mh_asfoury',
  cvUrl: '/cv/mouhcine-asfoury-cv.pdf',
  cv: '/cv/mouhcine-asfoury-cv.pdf',
  photo: '/images/profile/mouhcine-asfoury-profile.png',
  profileImage: '/images/profile/mouhcine-asfoury-profile.png',
  photoFallback: '/images/logos/avatar-placeholder.svg',
};

export const navigation = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const profileFacts = [
  { label: 'Localisation', value: profile.location },
  { label: 'Diplôme', value: profile.diploma },
  { label: 'Spécialité', value: profile.specialization },
  { label: 'Profil', value: profile.role },
  { label: 'Email', value: profile.email, href: profile.emailLink },
  { label: 'Téléphone', value: profile.phoneDisplay, href: profile.phoneLink },
  { label: 'Disponibilité', value: profile.availability || 'À compléter' },
];
