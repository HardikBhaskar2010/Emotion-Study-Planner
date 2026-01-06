# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
   ```bash
   cd /app
   git init
   git add .
   git commit -m "Initial commit: Emotion-Aware Study Assistant"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the `vercel.json` configuration
   - Click "Deploy"
   - Done! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /app
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: emotion-aware-study-assistant
# - Directory: ./
# - Override settings? No

# For production
vercel --prod
```

## Deploy to Netlify

### Via Drag & Drop

```bash
# Build the app
cd /app/frontend
yarn build

# The build output is in /app/frontend/dist/
# Drag and drop this folder to netlify.app/drop
```

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
cd /app/frontend
yarn build

# Deploy
netlify deploy --prod --dir=dist
```

## Deploy to GitHub Pages

```bash
# Install gh-pages
cd /app/frontend
yarn add -D gh-pages

# Add to package.json scripts:
# "predeploy": "yarn build",
# "deploy": "gh-pages -d dist"

# Set base in vite.config.ts:
# base: '/your-repo-name/'

# Deploy
yarn deploy
```

## Deploy to Cloudflare Pages

1. Push code to GitHub
2. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
3. Go to Pages → Create a project
4. Connect your repository
5. Build settings:
   - **Build command:** `cd frontend && yarn build`
   - **Build output directory:** `frontend/dist`
6. Deploy!

## Deploy to Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
cd /app
railway init

# Deploy
railway up
```

## Environment Variables

This app doesn't require any environment variables! 🎉

Everything runs client-side, so there's nothing to configure.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Build Verification

Before deploying, verify locally:

```bash
cd /app/frontend

# Build
yarn build

# Preview
yarn preview

# Visit http://localhost:4173
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### 404 on Refresh

Add this to your hosting provider:
- **Vercel:** Already configured in `vercel.json`
- **Netlify:** Create `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Blank Page

Check browser console for errors. Usually caused by:
- Incorrect base path
- Missing environment variables (not needed for this app)
- CORS issues (not applicable for static sites)

## Performance Tips

✅ Already optimized:
- Code splitting with Vite
- Tree shaking enabled
- Minified production builds
- Optimized assets
- Lazy loading routes

## Monitoring

Add these services (optional):
- **Analytics:** Google Analytics, Plausible
- **Error tracking:** Sentry
- **Performance:** Web Vitals

## CI/CD

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: cd frontend && yarn install
      - name: Build
        run: cd frontend && yarn build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Cost

All recommended platforms offer generous free tiers:

| Platform | Free Tier |
|----------|-----------|
| Vercel | ✅ 100GB bandwidth/month |
| Netlify | ✅ 100GB bandwidth/month |
| Cloudflare Pages | ✅ Unlimited bandwidth |
| GitHub Pages | ✅ 1GB storage, 100GB bandwidth |

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All features work (mood selection, plan generation)
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] No console errors
- [ ] Fast load time (< 3s)
- [ ] SEO meta tags present
- [ ] Custom domain configured (if needed)

## Support

Need help? Check:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy)

---

**Ready to deploy?** Pick your platform and follow the steps above! 🚀
