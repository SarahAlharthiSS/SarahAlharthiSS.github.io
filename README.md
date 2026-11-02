# Sarah Alharthi — Portfolio

React + Vite portfolio with Motion animations, Arabic/English toggle and a mobile layout.

## Run locally

```bash
npm install
npm run dev
```

## Edit your links

Open `src/config.js`:

- `github`: your GitHub profile URL
- `linkedin`: already set
- `FORMSPREE_ID` (optional): to receive contact-form messages directly in your inbox, create a free form at formspree.io and paste its ID. If it's empty, the form opens the visitor's email app with the message ready.

All text (English + Arabic) is in `src/content.js`.

## Deploy to GitHub Pages

```bash
npm run build
```

Upload the contents of `dist/` to a repo named `your-username.github.io`, or push this project and use a GitHub Pages / Netlify / Vercel deploy. `base: "./"` is already set in `vite.config.js`, so it works from any path.

`npm run build:single` creates one self-contained `index.html` if you just want a single file.

## Structure

```
src/
  config.js        links, Formspree ID, colors
  content.js       all English + Arabic text
  App.jsx          language state, scroll progress bar
  index.css        styles + responsive breakpoints
  components/      Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
```
