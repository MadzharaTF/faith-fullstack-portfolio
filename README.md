# Faith Madzhara — Full-Stack Developer Portfolio

A modern developer portfolio built with Next.js and TypeScript.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Update before publishing

Search the project for these placeholders and replace them:

- `YOUR-USERNAME`
- `YOUR-EMAIL@example.com`
- `YOUR-LINKEDIN`

Add your CV as:

`public/Faith_Madzhara_CV.pdf`

## Deploy with GitHub Pages

This project uses `output: "export"`, so `pnpm build` creates a static `out/` folder.
You can deploy the output through GitHub Actions / GitHub Pages.

## Deploy with Vercel

Push this repository to GitHub, import the repository in Vercel, and deploy with the default Next.js settings.

### GitHub Pages setup

1. Create a new GitHub repository and push this folder to `main`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push a commit to `main` or run the workflow manually under **Actions**.
5. Your Pages URL will appear in the deployment job.

> If this is a project repository such as `faith-fullstack-portfolio` instead of a username root site, you may need to configure a base path for asset URLs. Vercel does not require that extra step.
