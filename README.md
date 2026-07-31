# Mouhcine Asfoury | Portfolio Développeur Full Stack

Portfolio professionnel de Mouhcine Asfoury, développeur Full Stack basé à Casablanca, Maroc.

Le site présente le profil, les projets, les compétences, l’expérience, la formation, les certifications, le CV et les coordonnées professionnelles.

## Fonctionnalités

- Navigation sticky responsive avec menu mobile
- Hero avec photo professionnelle, CV, LinkedIn, GitHub et email
- Section À propos avec informations de contact réelles
- Compétences organisées par catégories
- Projets avec galeries, modale, miniatures et navigation clavier
- Expérience professionnelle Fadesol Power Solutions
- Formation Mundiapolis Casablanca
- Certifications réelles avec aperçu image/PDF
- Contact avec email, téléphone, LinkedIn, GitHub, Instagram et formulaire
- SEO : Open Graph, Twitter Card, Schema.org, favicon, robots.txt, sitemap.xml
- Docker dev avec hot reload

## Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS avec fallback mailto
- Docker et Docker Compose
- ESLint
- Vercel

## Architecture

```text
src/
  components/
    common/
    layout/
    sections/
  data/
    profile.js
    skills.js
    projects.js
    certifications.js
    education.js
    experience.js
  hooks/
  services/
  utils/
  App.jsx
  main.jsx
  index.css
public/
  images/
  cv/
  favicon/
```

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

URL :

```text
http://localhost:5173
```

## Lint et build

```bash
npm run lint
npm run build
```

## Docker

```bash
docker compose up --build
```

URL :

```text
http://localhost:5173
```

Arrêt :

```bash
docker compose down
```

## CV

Le CV utilisé par tous les boutons :

```text
public/cv/mouhcine-asfoury-cv.pdf
```

Le chemin public :

```text
/cv/mouhcine-asfoury-cv.pdf
```

## Images

Voir [IMAGE_GUIDE.md](IMAGE_GUIDE.md) et [ASSETS_REPORT.md](ASSETS_REPORT.md).

Les images doivent être placées dans `public/images/` et référencées sans `/public`.

## Personnalisation des données

Modifier les fichiers dans `src/data/` :

- `profile.js`
- `skills.js`
- `projects.js`
- `certifications.js`
- `education.js`
- `experience.js`

Les champs encore à compléter sont laissés vides ou indiqués avec un commentaire TODO.

## EmailJS

Copier `.env.example` vers `.env` si EmailJS est utilisé :

```bash
cp .env.example .env
```

Variables :

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sans ces variables, le formulaire ouvre un email prérempli vers `asfourymouhcine@gmail.com`.

## Déploiement Vercel

Configuration recommandée :

- Framework Preset : Vite
- Install Command : `npm install`
- Build Command : `npm run build`
- Output Directory : `dist`

Voir [DEPLOYMENT.md](DEPLOYMENT.md).

## Auteur

Mouhcine Asfoury  
Email : asfourymouhcine@gmail.com  
LinkedIn : https://www.linkedin.com/in/asfoury-mouhcine-960075372  
GitHub : https://github.com/asfourymouhcine
