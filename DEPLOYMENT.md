# Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel, a modern hosting platform perfect for React applications.

## Quick Start Deployment (Recommended)

### Step 1: Prepare Your Project

1. Open terminal/command prompt in your project directory
2. Initialize Git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Add the remote and push:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Deploy with Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Select your portfolio repository from the list
6. Vercel will auto-detect Vite configuration
7. Click "Deploy"

**That's it!** Your portfolio is now live. You'll get a URL like: `your-portfolio.vercel.app`

## Advanced Options

### Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Enter your custom domain (e.g., `yourname.com`)
4. Follow the DNS configuration instructions
5. Update your domain registrar's nameservers

### Environment Variables

If you add environment variables later:
1. Go to "Settings" → "Environment Variables"
2. Add your variables
3. Redeploy: Click "Deployments" → "Redeploy"

### Build Settings

Current settings (auto-detected from vite.config.js):
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18 (recommended)

To modify:
1. Go to "Settings" → "Build & Development Settings"
2. Update as needed
3. Changes apply to next deployment

## Monitoring Deployments

### View Deployment Status

1. Go to "Deployments" tab in your project
2. See all previous deployments
3. Click on any deployment to view details

### Check Build Logs

1. Click on a deployment
2. Open "Build Logs" tab
3. Troubleshoot any build errors

### Automatic Deployments

Vercel automatically deploys when you:
- Push to main branch
- Create a pull request (preview deployment)
- Manually trigger redeploy

## Troubleshooting

### Build Fails

**Error**: "npm ERR! code EWORKSPACES"
- **Solution**: Ensure package.json is in the root directory

**Error**: "Module not found"
- **Solution**: Check that all dependencies are listed in package.json

**Error**: "Port already in use"
- **Solution**: Vercel assigns ports automatically, no action needed

### Pages Not Loading

1. Check that all file paths are correct
2. Ensure CSS and assets are properly imported
3. Check browser console for errors (F12)

### Form Not Working

Current form uses `mailto:` - works on all devices
- **Desktop**: Opens default email client
- **Mobile**: Opens email app
- **Webmail**: Opens compose in browser

## Performance Tips

### Optimize Images
1. Compress images before adding (use [tinypng.com](https://tinypng.com))
2. Use WebP format when possible
3. Set image dimensions explicitly

### Enable Caching
Vercel automatically caches static files - no action needed!

### Monitor Performance
1. Go to "Analytics" in Vercel dashboard
2. View Core Web Vitals
3. Identify bottlenecks

## SSL/HTTPS

✅ **Automatically enabled** by Vercel
- All deployments use HTTPS
- SSL certificates auto-renewed
- No extra configuration needed

## CDN & Edge Network

Vercel serves your site from:
- Global edge network
- Automatic image optimization
- Cache invalidation on redeploys

## Database Connections (Future)

If you add a backend API:
1. Create separate Vercel project for backend
2. Update API URLs in environment variables
3. Enable CORS if needed
4. Redeploy frontend

## Analytics & Monitoring

### Web Analytics (Free)
1. Go to "Analytics" → "Web Analytics"
2. Enable analytics
3. View pageviews, top pages, referrers

### Error Tracking
1. Install Sentry integration (optional)
2. Track errors in real-time
3. Get alerts for critical issues

## Team Collaboration

To add collaborators:
1. Go to "Settings" → "Team"
2. Click "Invite"
3. Enter email address
4. Set permissions (Admin, Member, Viewer)

## Cost & Limits

**Free Plan Includes**:
- Unlimited projects and deployments
- Unlimited bandwidth
- 12 serverless function executions/month
- 100 GB bandwidth/month
- Perfect for portfolios!

**Pro Plan** ($20/month):
- Priority support
- Advanced analytics
- Team management
- Higher function limits

## Rollback to Previous Version

If something breaks:
1. Go to "Deployments"
2. Find the last working deployment
3. Click "..." menu
4. Select "Redeploy"
5. Confirm deployment

## Update Domain DNS

If using custom domain:

**For most registrars** (GoDaddy, Namecheap, etc.):
1. Log into registrar account
2. Go to DNS settings
3. Add these nameservers:
   - ns1.vercel.com
   - ns2.vercel.com
   - ns3.vercel.com
   - ns4.vercel.com
4. Remove old nameservers
5. Wait 24-48 hours for propagation

## Local Testing Before Deploy

Always test locally before pushing:
```bash
npm run build
npm run preview
```

Visit the preview URL to test the production build.

## Updating Your Portfolio

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes:
```bash
git add .
git commit -m "Update portfolio"
```
4. Push to GitHub:
```bash
git push origin main
```
5. Vercel automatically redeploys!

## Questions or Issues?

- Check [Vercel Docs](https://vercel.com/docs)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Review deployment logs in Vercel dashboard

---

**Your portfolio is now live and ready to impress potential employers!** 🚀

Remember to:
- Keep your GitHub repository updated
- Regularly update your projects and skills
- Monitor your analytics
- Test new features before deploying
