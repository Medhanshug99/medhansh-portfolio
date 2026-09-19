# Portfolio project rules
Stack: Vite 7, React 19, Tailwind CSS v4 (@tailwindcss/postcss), Framer Motion, lightswind UI (vendored in src/ui), react-icons, react-toastify, react-tooltip, react-github-calendar, @emailjs/browser v4. Deployed on Vercel; api/ holds serverless functions (Neon Postgres visitor counter).

## Project map (confirmed)
- App shell: src/App.jsx (ToastContainer, DotBackground; only "/" is a valid route)
- Navbar: src/components/navbar/Navbar.jsx, NavLinkBtn.jsx (theme toggle lives in Navbar.jsx)
- Hero: src/components/hero/Hero.jsx, HeroBtn.jsx. Avatars: public/hero-light.png, public/hero-dark.png. Resume button currently links to /medhanshpoojari_resume.pdf
- Experience: src/components/experience/Experience.jsx, ExperienceCard.jsx; data: src/data/experienceData.js
- Projects: src/components/projects/Projects.jsx, ProjectCard.jsx, ProjectDetails.jsx (dialog); data: src/data/projectsData.js
- Skills: src/components/skills/Skills.jsx, SkillCard.jsx; data: src/data/skillsData.js; icons: PNGs in src/assets/skills/
- Blog (DO NOT TOUCH): src/components/blogs/*, src/data/blogsData.js
- Contact: src/components/contact/Contact.jsx, Form.jsx (EmailJS + react-toastify), Input.jsx
- Footer: src/components/Footer.jsx
- UI kit (vendored, import don't rewrite): src/ui/lightswind/dialog.tsx (Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose), lens, typing-text, grid-dot-backgrounds; src/ui/hooks/use-toast.tsx (unused)
- Deploy: vercel.json has a catch-all rewrite to /index.html (files in public/ are still served first). api/ contains serverless functions.
- Convention: each section has src/components/<section>/ and reads from src/data/<section>Data.js. New sections follow the same pattern.

## Rules
- NEVER modify the Blog section (components, data, routes, styles). It is final.
- No emojis anywhere on the site: not in JSX text, data files, toasts, alt/aria text, tooltips, page title or meta tags, JSON-LD, README, or api/ responses. Use react-icons glyphs or plain text instead. Do not use emoji-style symbols such as check marks or stars in text either. Plain arrows and (c) are fine.
- Match the existing design system exactly (cards, radius, borders, fonts, spacing, motion). Must work in light + dark theme and at 375 / 768 / 1280 px.
- Reuse existing deps and the vendored UI kit. Do not add dependencies without asking.
- Write new code as .jsx/.js. Do not convert existing files or edit the vendored .tsx files in src/ui unless unavoidable.
- Keep content in src/data/*Data.js, not hardcoded in JSX.
- After every task run `npm run lint` and `npm run build` and fix what you broke.
- Never commit secrets. Publish only facts from docs/update-facts.md; never invent metrics, dates or links.
- Do ONLY the task in the current prompt. Do not start other steps or touch unrelated files.
- Lint already has known errors listed in docs/lint-baseline.txt. Never fix them unless asked. A step passes if `npm run build` succeeds and lint shows no NEW errors compared to that file.
- Never use a shared placeholder or data: URI icon for multiple items. Every skill icon must be a real react-icons glyph or an existing PNG.

## Git
- Repo: origin = https://github.com/Medhanshug99/medhansh-portfolio. Work only on branch portfolio-update. Tag `baseline` marks the starting point.
- There is a second remote, future_fs_01 (an old repo). Never push to it or touch it.
- NEVER run git push, force-push, rebase or reset unless I explicitly ask. Commit only.
- One commit per completed step, only after the step passes: git add -A && git commit -m "<message>". Never commit .env. If git status shows changes under dist/ or node_modules/, stop and ask me instead of committing.