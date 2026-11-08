# Tejashri Patil – Developer Portfolio

A modern, responsive portfolio built with **React 19** and **Vite**.

## Features
- Animated hero with typing effect, scroll progress bar and section highlighting in the navbar
- Scroll-reveal animations and a responsive mobile menu
- Sections: About, Skills, Experience, Projects, Education, Certifications, Contact
- Timeline layouts for projects, education and experience
- Accessible, keyboard-friendly and respects `prefers-reduced-motion`

## Tech Stack
React · Vite · lucide-react · CSS (no UI framework)

## Getting Started
```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in /dist
```

## Customising
- Personal details live in each file under `src/components/`
- Global theme, colours and animations: `src/theme.css`
- Replace `public/profile.jpg` and `public/resume.pdf` with your own files
- Set `EMAIL` in `src/components/Contact.jsx` to enable the contact form

## Deployment
Push to GitHub and import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (build command `npm run build`, output `dist`).