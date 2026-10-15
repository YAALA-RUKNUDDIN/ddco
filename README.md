# Machine Learning Lab Manual Website

A minimal, responsive website that displays `Labmanual.pdf` directly in an embedded PDF viewer.

## File layout
Keep these files in the repository root:
- `index.html`
- `style.css`
- `package.json`
- `Labmanual.pdf`

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Deploy to GitHub and Vercel
1. Upload the files listed above to the repository root.
2. Import the repository into Vercel.
3. Build command: `npm run build`
4. Output directory: `dist`

Important: Vite serves files in the repository root differently from files in `public`. For this simple setup, put `Labmanual.pdf` in the `public` folder for a standard Vite deployment, or configure the build to copy the root PDF into `dist`. This project includes a Vite config that copies the root PDF to the build output.
