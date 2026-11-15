# Deployment Guide - Aishwaraya Hostels Website

This repository is built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. It is fully production-ready and passes `npm run build` with zero errors.

---

## 🚀 Recommended Deployment: Vercel (1-Click & Zero Config)

Vercel is the creator of Next.js and provides the smoothest, fastest production deployment with automatic SSL/HTTPS, Edge caching, and zero configuration.

### Steps to Deploy on Vercel:

1. **Push your code to GitHub / GitLab / Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "Initial production-ready build"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New"** > **"Project"**.
   - Select your GitHub repository.
   - Root Directory: `./` (or select the project directory if inside a monorepo).
   - Framework Preset: **Next.js** (automatically detected).

3. **Configure Environment Variables** in Vercel:
   Under **Environment Variables**, add:

   | Variable Name | Example Value | Description |
   | :--- | :--- | :--- |
   | `NEXT_PUBLIC_SITE_URL` | `https://aishwaryahostels.com` | Your live custom domain |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919043456234` | WhatsApp customer support number |
   | `ADMIN_EMAIL` | `admin@aishwaryahostels.com` | Private admin portal email |
   | `ADMIN_PASSWORD` | `YourStrongSecretPassword!` | Private admin portal password |
   | `GOOGLE_SHEETS_SCRIPT_URL` | `https://script.google.com/macros/s/.../exec` | Webhook URL for booking sync |

4. **Click Deploy**:
   - Vercel builds and deploys your site globally in ~60 seconds.
   - Add your custom domain under **Settings > Domains** (e.g. `aishwaryahostels.com`).

---

## 🌐 Alternative: Netlify Deployment

1. Connect your Git repository in [Netlify](https://www.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add the same Environment Variables as above in **Site configuration > Environment variables**.

---

## 🖥️ Alternative: VPS / Cloud Server (Ubuntu, Hostinger, AWS, DigitalOcean)

If deploying to a VPS with Node.js and PM2:

1. **Install Node.js 20+ and PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Clone & Install Dependencies**:
   ```bash
   git clone <YOUR_REPO_URL>
   cd "PG(Web Build)"
   npm install --production=false
   ```

3. **Setup Environment Variables**:
   ```bash
   cp .env.example .env.local
   nano .env.local   # Fill in production values
   ```

4. **Build the Application**:
   ```bash
   npm run build
   ```

5. **Start with PM2**:
   ```bash
   pm2 start npm --name "aishwarya-hostels" -- start
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx Reverse Proxy with Free SSL (Let's Encrypt)**:
   ```nginx
   server {
       server_name aishwaryahostels.com www.aishwaryahostels.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   ```bash
   sudo certbot --nginx -d aishwaryahostels.com -d www.aishwaryahostels.com
   ```

---

## 🛡️ Production Verification Checklist

- [x] Production build passes (`npm run build` exited with code 0).
- [x] All 29 pages and API endpoints prerendered or server-rendered.
- [x] Full security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
- [x] DPDP Act 2023 compliant policies (`/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`).
- [x] Static XML sitemap at `/sitemap.xml`.
- [x] Static search engine rules at `/robots.txt`.
- [x] Branded vector favicon (`/favicon.svg`) and OpenGraph card (`/opengraph-image`).
- [x] Custom 404 handler (`/not-found`).
- [x] Sensitive credentials removed from client bundle.
