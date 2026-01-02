# Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel?**
- Built by Next.js creators
- Automatic deployments
- Free tier with great features
- Zero configuration needed

**Steps:**
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Link to existing project? **No**
   - Project name: **your-portfolio** (or any name)
   - Directory: **./**
   - Build command: **npm run build**
   - Output directory: **.next**

5. Your site will be live at: `https://your-portfolio.vercel.app`

**Automatic Deployments:**
- Connect your GitHub repository
- Push to main branch = automatic deployment
- Preview deployments for pull requests

---

### Option 2: Netlify

**Steps:**
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Build your project:
```bash
npm run build
```

4. Deploy:
```bash
netlify deploy --prod
```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `.next` folder
3. Or connect GitHub for auto-deployments

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/protfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

3. Update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

4. Deploy:
```bash
npm run deploy
```

**Note:** GitHub Pages has limitations with Next.js dynamic features. Consider Vercel or Netlify for full Next.js support.

---

## 🔧 Pre-Deployment Checklist

- [ ] Update all social media links
- [ ] Add real contact email
- [ ] Update GitHub/LinkedIn URLs
- [ ] Add favicon
- [ ] Test all forms and links
- [ ] Optimize images
- [ ] Check mobile responsiveness
- [ ] Test in different browsers
- [ ] Verify SEO meta tags
- [ ] Update README.md

---

## 🌐 Custom Domain Setup

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed

### Netlify
1. Go to Site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create GA4 property
2. Get Measurement ID
3. Add to `app/layout.js`:
```js
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```
Add to `app/layout.js`:
```js
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🐛 Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild
- Check for missing dependencies

### Deployment Errors
- Verify build command works locally
- Check environment variables
- Review deployment logs

### 404 Errors
- Verify routing structure
- Check `next.config.js` settings
- Ensure all files are committed

---

## 📱 Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Already handled by Next.js
3. **Lazy Loading**: Components load on scroll
4. **Minification**: Automatic in production builds
5. **CDN**: Automatic with Vercel/Netlify

---

## 🔒 Security Considerations

- Never commit `.env` files
- Use environment variables for API keys
- Enable HTTPS (automatic on Vercel/Netlify)
- Regular dependency updates

---

## 📈 Monitoring

### Vercel
- Built-in analytics dashboard
- Performance metrics
- Error tracking

### Netlify
- Built-in analytics
- Form submissions
- Deploy notifications

---

**Recommended**: Start with Vercel for the easiest Next.js deployment experience!

