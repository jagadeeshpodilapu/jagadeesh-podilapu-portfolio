# Jagadeeswara Rao Podilapu — Portfolio

A static-export portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and `next/font`. Project, experience, skill, profile, and SEO copy live in `/data`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production static export with `npm run build`; the output is written to `out/`.

## Add a project in about 2 minutes

1. Add an object to `data/projects.ts` with a unique `slug`, title, short tagline, role, year, stack, three impact bullets, `featured`, `cover`, `screenshots`, and `links`. Add `caseStudy` when you have those details.
2. Add SVG or raster screenshots under `public/projects/<slug>/` and point `cover` and `screenshots` at their public paths. The starter assets are generated SVG screens; replace them with real images whenever ready.
3. Run `npm run build`. The homepage and `/projects/<slug>/` page are generated from the project list. Empty external links are omitted, and a project with no case study leaves that section out.

Only one project should have `featured: true` for the intended homepage layout. The data array order controls project-list order and next-project navigation.

## Replace screenshots and resume

- Put project screenshots in `public/projects/<slug>/` and update the matching paths in `data/projects.ts`. Add meaningful `alt` descriptions if you change the gallery implementation.
- Put your PDF at `public/resume.pdf`; the hero's Download resume link targets `/resume.pdf`. The brief did not include a resume file, so add it before sharing the site.

## Update your domain before deployment

The brief did not include a portfolio domain, so `https://example.com` is used as a visible placeholder in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`. Replace it in those files with your deployed domain before sharing. The Open Graph image is `public/og-image.png` (1200 × 630); `public/og-image.svg` is its editable vector source. Update both and the metadata references if you replace it. The app favicon is `app/icon.svg`.

## Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Keep the default Next.js build command (`npm run build`) and output settings; Next.js static export writes the site to `out/`.
3. Add your domain in Vercel, update the placeholder domain in the SEO files, and redeploy. The same `out/` directory can be published by any static host such as Netlify.

## Responsive review

Reviewed browser screenshots at 375 × 812, 768 × 900, and 1280 × 900 in both light and dark mode. The mobile proof strip now appears with the hero actions, and the contact section keeps readable contrast in dark mode. Before publishing, also check that the project gallery scrolls horizontally on narrow screens after replacing the starter artwork.

## Notes and decisions

- Content uses the supplied biography, project outcomes, experience, skills, and education. No phone number is included.
- The phone frame is built in CSS and cycles through the supplied project-screen artwork. It remains on the first screen when reduced motion is requested.
- A remembered light/dark theme toggle follows the system preference on first visit. Scroll reveals respect `prefers-reduced-motion`.
- Static export uses unoptimized `next/image`, appropriate for SVG and locally hosted screenshots.
