@echo off
echo ========================================
echo Deploying Portfolio Directly to Vercel
echo ========================================
echo.
echo This will deploy without connecting to Git
echo.
echo Follow these steps:
echo 1. When prompted, press Enter to continue
echo 2. Choose "Set up and deploy" 
echo 3. For "Link to existing project?" choose NO
echo 4. Enter project name: sagar-portfolio
echo 5. Leave directory as: ./
echo 6. For "Override settings?" choose NO
echo.
pause

npx vercel --prod

pause

