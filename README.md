# Planning Vitrolles

Application Next.js de gestion de planning (manager + employés), prête pour GitHub/Vercel.

## Stack
Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL (Neon), NextAuth.

## Installation locale
1. `npm install`
2. Copier `.env.example` en `.env`
3. Créer une base Neon et renseigner `DATABASE_URL`
4. `npm run prisma:generate`
5. `npm run prisma:migrate`
6. `npm run prisma:seed`
7. `npm run dev`

## Comptes de démonstration
- Manager: `manager@planning.local` / `Password123!`
- Employés: `employe1@planning.local` à `employe9@planning.local` / `Password123!`

## Fonctions clés
- Planning équipe sur 4 semaines (responsive desktop/tablette/mobile)
- Saisie temps de présence + validation manager
- Demandes de congés + quotas pendant vacances scolaires
- Contrôles métier: lundi-vendredi, plage 09:00-19:00, jours fériés FR
- Export calendrier `.ics` (équipe ou individuel), compatible Apple Calendar / Google Calendar

## GitHub
1. Créer un repo GitHub.
2. `git remote add origin <url>`
3. `git push -u origin main`

## Déploiement Vercel
1. Importer le repo GitHub dans Vercel.
2. Configurer les variables d'environnement (`DATABASE_URL`, `AUTH_SECRET`, `NEXTAUTH_URL`).
3. Déployer.

## Voir le rendu en localhost (immédiat)
1. `cp .env.example .env`
2. Renseigner `DATABASE_URL` (Neon) et `AUTH_SECRET`
3. `npm install`
4. `npm run prisma:generate`
5. `npm run prisma:migrate`
6. `npm run prisma:seed`
7. `npm run dev`
8. Ouvrir `http://localhost:3000`

> Si vous voyez une erreur `403 Forbidden` pendant `npm install`, cela vient de la politique réseau/registry de l'environnement d'exécution. Exécutez ces commandes sur votre machine locale (ou un environnement avec accès npm) pour afficher le rendu.
