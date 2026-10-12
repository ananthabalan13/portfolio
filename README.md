# Anantha Balan — React Developer Portfolio

A responsive React + JavaScript portfolio built with Vite, Bootstrap, Bootstrap Icons, and custom CSS.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Deploy
You can deploy the project to Vercel or Netlify:
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel or Netlify.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

## Update projects
Edit `src/data/projects.js`. Add a new object to the array. Keep `liveUrl` or `githubUrl` empty if a link is not available. Add preview images under `public/images/` and use paths such as `/images/my-project.png`.

## Update skills
Edit `src/data/skills.js`.

## Update documents
Place genuine downloadable files under `public/documents/`, then edit `src/data/documents.js`. Only set `available: true` when the file exists. The experience and course certificate cards are intentionally marked unavailable until the genuine files are added.

## Update theme
Edit the custom properties in `src/styles/variables.css`. The site uses these variables for its shared color palette, typography, spacing, borders, and transitions.

## Notes
- The project uses JavaScript and JSX only; no TypeScript files are included.
- Project preview artwork is a stylized fallback, not a screenshot of the deployed project.
- Verify personal details and exact job dates before sending applications.
