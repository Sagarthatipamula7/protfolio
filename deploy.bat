@echo off
echo ========================================
echo Deploying Portfolio to Vercel
echo ========================================
echo.
echo Step 1: This will open Vercel in your browser for authentication
echo Step 2: Follow the prompts to deploy
echo.
pause

npx vercel --prod

echo.
echo ========================================
echo Deployment Complete!
echo Check the URL provided above
echo ========================================
pause

