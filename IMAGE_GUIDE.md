# Guide des images

## Organisation actuelle

```text
public/
  images/
    profile/
      mouhcine-asfoury-profile.png
    projects/
      fadesol_taskflow/
      cv_generate/
      erp_location/
    certifications/
    education/
      mundiapolis-logo.jpg
    logos/
  cv/
    mouhcine-asfoury-cv.pdf
  favicon/
```

## Photo de profil

Chemin utilisé :

```text
public/images/profile/mouhcine-asfoury-profile.png
```

Chemin public :

```text
/images/profile/mouhcine-asfoury-profile.png
```

Recommandations :

- Ratio carré ou portrait propre
- Largeur minimale : 800 px
- Format : PNG, JPG ou WebP
- Cadrage professionnel
- Pas de déformation

## Images de projets

Les chemins utilisés sont centralisés dans `src/data/projects.js`.

Exemple :

```js
mainImage: '/images/projects/fadesol_taskflow/fadesol-dashboard.png',
gallery: [
  '/images/projects/fadesol_taskflow/fadesol-login.png',
  '/images/projects/fadesol_taskflow/fadesol-users.png',
],
```

Recommandations :

- Captures lisibles
- Ratio proche de 16:9 ou 16:10
- Largeur idéale : 1200 px ou plus
- Nom en minuscules
- Pas d’espaces
- Pas d’accents
- Tirets entre les mots

## Certifications

Chemin :

```text
public/images/certifications/
```

Les fichiers JPG/PNG s’affichent comme images. Les PDF s’ouvrent dans une fenêtre de prévisualisation dédiée.

Les données sont dans :

```text
src/data/certifications.js
```

## Formation

L’image actuelle :

```text
public/images/education/mundiapolis-logo.jpg
```

Les données sont dans :

```text
src/data/education.js
```

## CV

Fichier actuel :

```text
public/cv/mouhcine-asfoury-cv.pdf
```

Chemin public :

```text
/cv/mouhcine-asfoury-cv.pdf
```
