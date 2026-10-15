# Machine Learning Lab Manual Website

A minimal, responsive website that opens the uploaded `Labmanual.pdf` in an embedded PDF viewer.

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Deploy to GitHub and Vercel
1. Create a new GitHub repository and upload the contents of this folder.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite** (Vercel usually detects it automatically).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

The PDF is served from `/Labmanual.pdf`. The page also includes open-in-new-tab and download controls.
