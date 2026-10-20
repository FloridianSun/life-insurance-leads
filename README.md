# Life Insurance by Bianca

Lead-generation site for Bianca Gaman, live at https://www.lifeinsurancebianca.com.

## Stack

- React (Create React App), single page in `src/App.js`
- Tailwind CSS v3, built at compile time (`tailwind.config.js`, `src/index.css`)
- Quote form sends submissions through Formspree
- Hosted on Vercel; every push to `main` deploys automatically
- Domain registered at GoDaddy; `lifeinsurancebianca.com` redirects to `www`

## Run locally

```bash
npm install
npm start        # http://localhost:3000
```

## Other commands

```bash
npm test         # run tests
npm run build    # production build in build/
```

## SEO files

`public/robots.txt`, `public/sitemap.xml`, and the meta tags in `public/index.html`
all use `https://www.lifeinsurancebianca.com`. Update `<lastmod>` in the sitemap
when page content changes.
