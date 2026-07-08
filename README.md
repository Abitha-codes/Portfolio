# Abitha S — Portfolio Website

A premium, recruiter-focused MERN Stack Developer portfolio. Built with React (Vite), Framer Motion, and plain CSS — no Tailwind.

---

## Tech Stack

- React 19 + Vite
- Framer Motion (animations)
- React Icons (tech stack icons, socials)
- EmailJS (contact form — no backend needed)
- ESLint (configured, zero warnings)

---

## Project Structure

```
abitha-portfolio/
├── public/
│   ├── favicon.svg
│   └── Abitha_Resume.pdf
├── src/
│   ├── assets/images/abitha.jpg
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Loader/
│   │   └── ScrollProgress/
│   ├── utils/data.js       <- all your content lives here
│   ├── App.jsx
│   ├── index.css           <- global styles & theme variables
│   └── main.jsx
├── eslint.config.js
├── package.json
└── vite.config.js
```

Every section is its own component with a co-located `.css` file.

---

## Step 1 — Open in VS Code

1. Unzip the project folder anywhere on your computer.
2. Open VS Code -> File -> Open Folder -> select `abitha-portfolio`.
3. Open the built-in terminal: Ctrl+` (Windows/Linux) or Cmd+` (Mac).

Recommended VS Code extensions (optional): ESLint, Prettier, ES7+ React snippets.

---

## Step 2 — Install Node.js

Download and install the LTS version from nodejs.org. Verify:

```bash
node -v
npm -v
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

Installs React, Framer Motion, React Icons, EmailJS, and ESLint.

---

## Step 4 — Run the Dev Server

```bash
npm run dev
```

Vite prints a local URL, typically http://localhost:5173. Open it in your browser. Hot-reloads on save.

---

## Step 5 — Run ESLint

```bash
npm run lint
```

Checks all .jsx/.js files. Configured to pass with zero warnings. Run before every commit.

---

## Step 6 — Customize Your Content

Almost everything text-based lives in `src/utils/data.js`:

- ROLES — the typing animation roles
- SKILLS — tech stack categories/icons
- PROJECTS — your project cards (title, description, tags, links)
- CONTACT_INFO — email, phone, location, socials

To swap your photo: replace `src/assets/images/abitha.jpg` with a new image (same filename, or update the import in `src/components/Hero/Hero.jsx`).

To swap your resume: replace `public/Abitha_Resume.pdf` (keep the same filename).

---

## Step 7 — Connect the Contact Form (EmailJS)

The contact form uses EmailJS (emailjs.com) so it works with no backend server.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) — copy the Service ID.
3. Create an Email Template with variables {{name}}, {{email}}, {{message}} — copy the Template ID.
4. Go to Account -> General — copy your Public Key.
5. Open `src/components/Contact/Contact.jsx` and replace:

```js
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

with your real values. Save, and test the form on localhost.

---

## Step 8 — Build for Production

```bash
npm run build
```

Creates an optimized `dist/` folder. Preview it locally:

```bash
npm run preview
```

---

## Step 9 — Deploy (Vercel — Recommended)

Option A: Via GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abitha-portfolio.git
git push -u origin main
```

Then go to vercel.com -> Add New Project -> import your GitHub repo. Framework Preset: Vite. Click Deploy.

Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## Alternative: Deploy to Netlify

1. Run `npm run build` to generate `dist/`.
2. Go to app.netlify.com -> Add new site -> Deploy manually.
3. Drag and drop the `dist/` folder.

Or connect your GitHub repo the same way as Vercel.

---

## Pre-Deploy Checklist

- [ ] Replaced EmailJS placeholder IDs with real ones
- [ ] Replaced resume PDF with your latest version
- [ ] Double-checked all project demo/GitHub links work
- [ ] Ran `npm run lint` with zero errors
- [ ] Ran `npm run build` successfully
- [ ] Tested contact form end-to-end

---

## License

Built for personal portfolio use by Abitha S.
