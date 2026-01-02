# Quick Vercel Deployment Guide

## Method 1: Deploy via Vercel Website (Easiest - Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login (free with GitHub/Google)

2. **Click "Add New Project"**

3. **Import your project:**
   - If you have GitHub: Connect your repository
   - If not: Use "Deploy" button and drag/drop your project folder

4. **Configure:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
   - Install Command: `npm install` (auto)

5. **Click "Deploy"** - Done! 🚀

Your site will be live at: `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Command Line (Using npx - No Install Needed)

Run these commands in your terminal:

```bash
npx vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name: **sagar-portfolio** (or any name)
- Directory: `./` (current directory)
- Override settings? **No**

For production deployment:
```bash
npx vercel --prod
```

---

## Method 3: Install Vercel CLI Globally

```bash
npm install -g vercel
vercel login
vercel
```

---

## After Deployment

1. **Get your live URL**: You'll receive a URL like `https://sagar-portfolio.vercel.app`

2. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

3. **Automatic Deployments**:
   - Connect GitHub repo for auto-deploy on push
   - Every commit to main branch = new deployment

---

## Environment Variables (If Needed)

If you add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Troubleshooting

- **Build errors**: Check that `npm run build` works locally first
- **Module errors**: Ensure all dependencies are in `package.json`
- **404 errors**: Check routing and `next.config.js`

---

**Recommended**: Use Method 1 (Vercel Website) - It's the easiest and fastest!

