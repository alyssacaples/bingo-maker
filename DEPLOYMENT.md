# Azure Static Web Apps Deployment Guide

## Overview

This guide will help you deploy your Bingo Card Maker to Azure Static Web Apps, making it available as a live website.

## Prerequisites

- Azure account (free tier is sufficient)
- GitHub account
- Git repository for your project

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Bingo Card Maker"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bingo-card-maker.git
   git push -u origin main
   ```

### 2. Create Azure Static Web App

1. **Go to Azure Portal:**
   - Visit [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create Static Web App:**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the Static Web App:**
   - **Subscription:** Choose your subscription
   - **Resource Group:** Create new or use existing
   - **Name:** `bingo-card-maker` (or your preferred name)
   - **Plan type:** Free (for personal projects)
   - **Region:** Choose closest to your users
   - **Source:** GitHub
   - **Organization:** Your GitHub username
   - **Repository:** `bingo-card-maker`
   - **Branch:** `main`

4. **Build Configuration:**
   - **Build Presets:** Custom
   - **App location:** `/` (root directory)
   - **Api location:** (leave empty)
   - **Output location:** `dist`

5. **Review and Create:**
   - Click "Review + create"
   - Click "Create"

### 3. GitHub Actions (Automatic)

Azure will automatically:
- Create a GitHub Actions workflow file in `.github/workflows/`
- Set up deployment tokens as repository secrets
- Trigger the first deployment

### 4. Monitor Deployment

1. **Check GitHub Actions:**
   - Go to your GitHub repository
   - Click on "Actions" tab
   - Watch the deployment progress

2. **View Your Site:**
   - Once deployment completes, Azure will provide a URL
   - Visit the URL to see your live Bingo Card Maker

## Manual Deployment Alternative

If you prefer manual deployment:

### Using Azure CLI

1. **Install Azure CLI:**
   ```bash
   # macOS
   brew install azure-cli
   
   # Windows
   winget install Microsoft.AzureCLI
   ```

2. **Install SWA CLI:**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

3. **Login and Deploy:**
   ```bash
   az login
   npm run build
   swa deploy ./dist --app-name bingo-card-maker
   ```

### Using VS Code Extension

1. **Install Extension:**
   - Install "Azure Static Web Apps" extension in VS Code

2. **Deploy:**
   - Open your project in VS Code
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
   - Type "Azure Static Web Apps: Create Static Web App"
   - Follow the prompts

## Configuration Files

### Required Files (Already Created)

- `staticwebapp.config.json` - Azure Static Web Apps configuration
- `.github/workflows/azure-static-web-apps.yml` - GitHub Actions workflow
- `package.json` - Dependencies and build scripts

### Environment Variables

No environment variables are needed for this project as it runs entirely in the browser.

## Custom Domain (Optional)

To use your own domain:

1. **In Azure Portal:**
   - Go to your Static Web App
   - Click "Custom domains"
   - Click "Add custom domain"
   - Follow the DNS configuration steps

## Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Verify build command in workflow file

2. **Site Not Loading:**
   - Check if deployment completed successfully
   - Verify `output_location` is set to `dist`
   - Check browser console for errors

3. **PDF Generation Not Working:**
   - This should work automatically as it's client-side
   - Check browser compatibility
   - Ensure HTTPS is enabled (Azure provides this automatically)

### Getting Help

- **Azure Support:** [docs.microsoft.com/azure/static-web-apps](https://docs.microsoft.com/azure/static-web-apps)
- **GitHub Actions:** Check Actions tab in your repository
- **Error Logs:** Available in Azure Portal under your Static Web App

## Security Considerations

- All processing happens client-side (secure)
- No sensitive data is transmitted
- HTTPS is enforced by Azure automatically
- No API keys or secrets required

## Performance Optimization

The app is already optimized with:
- Vite for fast builds and loading
- Tree-shaking to reduce bundle size
- Static asset optimization
- CDN delivery through Azure

Your Bingo Card Maker will be available globally with excellent performance!

## Next Steps

After deployment:
1. Test all functionality on the live site
2. Share the URL with friends and family
3. Consider adding analytics (optional)
4. Monitor usage through Azure portal

---

**Congratulations! Your Bingo Card Maker is now live on the internet! 🎉**
