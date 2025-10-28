# GitHub Pages Deployment

This portfolio website is configured to deploy automatically to GitHub Pages.

## Automatic Deployment

The website will automatically deploy when you push changes to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Build the React application
2. Deploy it to GitHub Pages

## Manual Deployment

If you want to deploy manually, you can use:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

## GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be available at: `https://yashpal-0.github.io/Portfolio/`

## Important Notes

- The base path is set to `/Portfolio/` in `vite.config.js`
- Make sure your repository name is "Portfolio" (case-sensitive)
- If you change the repository name, update the `base` path in `vite.config.js` accordingly

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

The development server will start at `http://localhost:5173`
