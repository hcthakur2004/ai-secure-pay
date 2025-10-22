# 🚀 Deployment Guide

This guide explains how to deploy AI Secure Pay to various platforms while keeping your Gemini API key secure.

## 🔐 Security Note

**Your `.env` file is NOT committed to GitHub.** It's protected by `.gitignore`. You'll add the API key directly in your deployment platform's dashboard.

---

## Netlify Deployment

### Method 1: Using Netlify UI

1. **Push your code to GitHub** (already done ✅)

2. **Go to [Netlify](https://app.netlify.com/)**
   - Sign in with your GitHub account

3. **Import your project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository: `hcthakur2004/ai-secure-pay`

4. **Configure build settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

5. **Add Environment Variables** ⚠️ **IMPORTANT**
   - Before deploying, click "Show advanced"
   - Click "New variable"
   - Add:
     ```
     Key: VITE_GEMINI_API_KEY
     Value: [Your Gemini API Key]
     ```

6. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (2-3 minutes)

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Set environment variable
netlify env:set VITE_GEMINI_API_KEY "your_api_key_here"

# Deploy
netlify deploy --prod
```

---

## Vercel Deployment

### Method 1: Using Vercel UI

1. **Go to [Vercel](https://vercel.com/)**
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Import `hcthakur2004/ai-secure-pay`

3. **Configure Project**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```

4. **Add Environment Variables** ⚠️ **IMPORTANT**
   - Go to "Environment Variables" section
   - Add:
     ```
     Name: VITE_GEMINI_API_KEY
     Value: [Your Gemini API Key]
     Environment: Production, Preview, Development
     ```

5. **Deploy**
   - Click "Deploy"

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add VITE_GEMINI_API_KEY
# Paste your API key when prompted

# Deploy to production
vercel --prod
```

---

## GitHub Pages Deployment

**Note:** For GitHub Pages, you'll need to use GitHub Secrets for the API key.

1. **Add GitHub Secret**
   - Go to your repo: `https://github.com/hcthakur2004/ai-secure-pay`
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add:
     ```
     Name: VITE_GEMINI_API_KEY
     Secret: [Your Gemini API Key]
     ```

2. **Create GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      env:
        VITE_GEMINI_API_KEY: ${{ secrets.VITE_GEMINI_API_KEY }}
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages

---

## Railway Deployment

1. **Go to [Railway](https://railway.app/)**
   - Sign in with GitHub

2. **New Project**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select `hcthakur2004/ai-secure-pay`

3. **Add Environment Variables**
   - Go to Variables tab
   - Add:
     ```
     VITE_GEMINI_API_KEY = your_api_key_here
     ```

4. **Configure Settings**
   ```
   Build Command: npm run build
   Start Command: npm run preview
   ```

---

## Render Deployment

1. **Go to [Render](https://render.com/)**
   - Sign in with GitHub

2. **New Static Site**
   - Select `hcthakur2004/ai-secure-pay`

3. **Configure**
   ```
   Build Command: npm run build
   Publish Directory: dist
   ```

4. **Add Environment Variables**
   - Go to "Environment" tab
   - Add:
     ```
     Key: VITE_GEMINI_API_KEY
     Value: [Your API Key]
     ```

---

## ✅ Verification After Deployment

1. **Test the Phishing Detector page**
2. **Check browser console** for any API errors
3. **Try analyzing a test message**

If you see "API Key not configured" errors, double-check your environment variables.

---

## 🔄 Updating Environment Variables

### Netlify
```bash
netlify env:set VITE_GEMINI_API_KEY "new_key"
```

### Vercel
```bash
vercel env rm VITE_GEMINI_API_KEY production
vercel env add VITE_GEMINI_API_KEY production
```

### Or use the platform's dashboard to update variables.

---

## 🆘 Troubleshooting

**Issue:** "Failed to analyze message" error

**Solution:**
1. Check if environment variable is set in platform
2. Verify variable name is exactly: `VITE_GEMINI_API_KEY`
3. Redeploy after adding the variable

**Issue:** API key not working

**Solution:**
1. Generate a new API key at [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update the environment variable
3. Trigger a new deployment

---

## 📝 Important Notes

- ✅ `.env` file is **never** committed to GitHub
- ✅ API key is only stored in deployment platform
- ✅ Each deployment platform has its own secure environment variable system
- ⚠️ Always use `VITE_` prefix for environment variables in Vite
- ⚠️ After adding environment variables, you must **redeploy** for changes to take effect

---

Made with 🛡️ by Harish Chandra Thakur
