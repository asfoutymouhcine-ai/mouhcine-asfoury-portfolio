# Déploiement du portfolio

## 1. Créer le repository GitHub

Créer un nouveau repository, par exemple `mouhcine-asfoury-portfolio`.

## 2. Installation locale

```bash
npm install
```

## 3. Lancement avec npm

```bash
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## 4. Lancement avec Docker

```bash
docker compose up --build
```

Le site est disponible sur `http://localhost:5173`.

## 5. Push vers GitHub

```bash
git add .
git commit -m "Create professional portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 6. Connecter le repository à Vercel

Dans Vercel, importer le repository GitHub.

Configuration :

- Framework Preset : Vite
- Build Command : `npm run build`
- Output Directory : `dist`
- Install Command : `npm install`

## 7. Variables d’environnement

Ajouter les variables EmailJS si le formulaire doit envoyer directement les messages :

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sans ces variables, le formulaire ouvre l’application email avec un message prérempli.

## 8. Déploiement

Lancer le déploiement depuis Vercel. Après publication, remplacer les placeholders de domaine dans :

- `index.html`
- `robots.txt`
- `sitemap.xml`

## 9. Domaine personnalisé

Dans Vercel, aller dans Project Settings > Domains, ajouter le domaine, puis configurer les DNS demandés.
