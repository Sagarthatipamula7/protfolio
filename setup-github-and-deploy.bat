@echo off
echo ========================================
echo GitHub + Vercel Deployment Setup
echo ========================================
echo.
echo This will help you:
echo 1. Initialize Git repository
echo 2. Create GitHub repository
echo 3. Push code to GitHub
echo 4. Deploy to Vercel
echo.
pause

echo.
echo Step 1: Initializing Git...
git init

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Making first commit...
git commit -m "Initial commit: Portfolio website"

echo.
echo ========================================
echo IMPORTANT: Create GitHub Repository
echo ========================================
echo.
echo Now you need to:
echo 1. Go to: https://github.com/new
echo 2. Repository name: sagar-portfolio
echo 3. Make it Public (or Private)
echo 4. DO NOT initialize with README
echo 5. Click "Create repository"
echo.
echo After creating, GitHub will show commands.
echo Copy the repository URL and paste it below.
echo.
pause

set /p GITHUB_URL="Enter your GitHub repository URL (e.g., https://github.com/yourusername/sagar-portfolio.git): "

echo.
echo Step 4: Connecting to GitHub...
git branch -M main
git remote add origin %GITHUB_URL%

echo.
echo Step 5: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo GitHub Setup Complete!
echo ========================================
echo.
echo Now go to Vercel:
echo 1. Visit: https://vercel.com/new
echo 2. Import your GitHub repository
echo 3. Paste this URL: %GITHUB_URL%
echo 4. Click Deploy!
echo.
echo OR run: npx vercel --prod
echo.
pause

