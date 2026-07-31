export const projects = [
  {
    id: 'fadesol-taskflow',
    title: 'Fadesol TaskFlow',
    category: 'Projet de fin d’études',
    shortDescription:
      'Plateforme web interne de gestion des projets, des tâches, des utilisateurs et de la communication entre les services.',
    fullDescription:
      'Fadesol TaskFlow est une plateforme développée dans le cadre de mon projet de fin d’études. Elle centralise la gestion des projets, des tâches, des utilisateurs, des rôles, des services, des tableaux de bord et de la communication interne.',
    problem:
      'L’entreprise avait besoin d’une solution centralisée pour mieux organiser ses projets, suivre l’avancement des tâches et améliorer la collaboration entre les différents services.',
    solution:
      'Une plateforme web basée sur une architecture microservices, avec une interface React moderne, des API REST développées avec FastAPI, une base de données PostgreSQL et une exécution conteneurisée avec Docker.',
    features: [
      'Authentification sécurisée',
      'Gestion des utilisateurs',
      'Gestion des rôles',
      'Gestion des services',
      'Gestion des projets',
      'Gestion des tâches et sous-tâches',
      'Gestion des statuts et priorités',
      'Tableaux de bord',
      'Messagerie interne',
      'Suivi des échéances',
    ],
    technologies: ['React', 'Vite', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Docker Compose', 'JWT', 'API REST', 'Architecture microservices'],
    mainImage: '/images/projects/fadesol_taskflow/fadesol-dashboard.png',
    gallery: [
      '/images/projects/fadesol_taskflow/fadesol-login.png',
      '/images/projects/fadesol_taskflow/fadesol-users.png',
      '/images/projects/fadesol_taskflow/fadesol-messaging.png',
    ],
    githubUrl: '',
    demoUrl: '',
    featured: true,
  },
  {
    id: 'cv-generate',
    title: 'CV Generate',
    category: 'Application web',
    shortDescription:
      'Application web permettant de créer, personnaliser, prévisualiser et générer un CV professionnel.',
    fullDescription:
      'Application web permettant de créer, personnaliser, prévisualiser et générer un CV professionnel à partir des informations renseignées par l’utilisateur.',
    problem:
      'Créer un CV clair et cohérent peut être long lorsque les informations, les expériences et la présentation doivent rester bien structurées.',
    solution:
      'Une interface web guidée avec tableau de bord, profil, expériences et génération de CV. Les technologies techniques précises peuvent être complétées dans les données du projet.',
    features: ['Authentification', 'Tableau de bord', 'Gestion du profil', 'Gestion des expériences', 'Génération de CV'],
    technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    mainImage: '/images/projects/cv_generate/cv-generate-dashboard.jpeg',
    gallery: [
      '/images/projects/cv_generate/cv-generate-login.jpeg',
      '/images/projects/cv_generate/cv-generate-profile.jpeg',
      '/images/projects/cv_generate/cv-generate-editor.jpeg',
    ],
    githubUrl: '',
    demoUrl: '',
    featured: true,
  },
  {
    id: 'erp-location',
    title: 'ERP Location',
    category: 'Application ERP',
    shortDescription: 'Solution de gestion ERP pour suivre les opérations de location.',
    fullDescription:
      'Application web de gestion de location permettant de centraliser les ressources, les réservations, les opérations et le suivi administratif.',
    problem:
      'Les opérations de location nécessitent un suivi clair des véhicules, des locations, des transferts, des agences et des indicateurs administratifs.',
    solution:
      'Une interface ERP centralisée avec tableau de bord opérationnel, gestion des locations et suivi des indicateurs visibles dans les captures.',
    features: ['Tableau de bord opérationnel', 'Gestion des locations', 'Formulaire de location', 'Suivi des revenus', 'Suivi des transferts', 'Notifications'],
    technologies: ['React', 'JavaScript', 'API REST', 'Base de données'],
    mainImage: '/images/projects/erp_location/erp-location-dashboard.jpeg',
    gallery: [
      '/images/projects/erp_location/erp-location-rentals.jpeg',
    ],
    githubUrl: '',
    demoUrl: '',
    featured: true,
  },
];
