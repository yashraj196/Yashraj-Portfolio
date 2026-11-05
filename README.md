# Yashraj Waghchaure — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite and CSS. The visual direction is inspired by the clean, precise, science/engineering aesthetic of the supplied Dribbble reference, adapted for cybersecurity.

## Run locally
1. Install Node.js (LTS).
2. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL shown by Vite.

## Build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Personalize before publishing
Edit `src/content.ts`:
- Replace `email` with your real email.
- Replace `whatsapp` with your country code + phone number (digits only).
- Add genuine certificates to `certifications`.
- Update project descriptions and links as your work progresses.

Add your actual resume PDF at `public/resume.pdf`. The resume buttons already point to `/resume.pdf`.

The contact form currently validates the input but does not send messages. Connect Formspree, EmailJS, Netlify Forms, or another service before relying on it.

## Publish to GitHub
Create a repository on GitHub, then run:
```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/yashraj196/portfolio.git
git push -u origin main
```
Change the remote URL if you choose a different repository name.

## Deploy
- **Vercel:** Import the GitHub repository. Framework: Vite; build command: `npm run build`; output directory: `dist`.
- **Netlify:** Add a new site from Git; build command: `npm run build`; publish directory: `dist`.
- **GitHub Pages:** Use a GitHub Actions workflow to run `npm ci`, `npm run build`, and publish `dist`. If deploying under a repository subpath, configure Vite's `base` in `vite.config.ts`.

## Project structure
```text
src/
  App.tsx       Main portfolio page and interactions
  content.ts    Editable profile, skills, projects, experience, links
  main.tsx      React entry point
  styles.css    Complete visual styling and responsive layout
public/
  resume.pdf    Add your resume here
```
