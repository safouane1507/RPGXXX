@echo off
title KENZ BLADI - Demarrage Complet
color 0B

echo =======================================================
echo         🚀 KENZ BLADI - DÉMARRAGE DU PROJET 🚀
echo =======================================================
echo.

echo [1] Lancement du Backend (Node.js/Express) sur le port 3000...
start "KENZ BLADI - BACKEND" cmd /k "cd backend && npm run dev"

echo [2] Lancement du Frontend (Angular) sur le port 4200...
start "KENZ BLADI - FRONTEND" cmd /k "cd frontend && ng serve"

echo.
echo =======================================================
echo            ✅ LIENS DIRECTS (Ctrl + Click) ✅
echo =======================================================
echo.
echo 🌐 PLATEFORME PUBLIQUE (Client) :
echo - Accueil       : http://localhost:4200/
echo - Tourisme      : http://localhost:4200/tourisme
echo - Boutique      : http://localhost:4200/marketplace
echo.
echo 🔐 AUTHENTIFICATION :
echo - Page de Login : http://localhost:4200/login
echo.
echo ⚙️ ESPACES RESTREINTS (Necessite une connexion) :
echo - Espace Admin  : http://localhost:4200/admin/dashboard
echo - Espace Pro    : http://localhost:4200/pro/dashboard
echo.
echo 🛠️ API BACKEND :
echo - Health Check  : http://localhost:3000/api/health
echo.
echo =======================================================
echo            👥 COMPTES DE TEST (MongoDB)
echo =======================================================
echo [Admin] Email: admin@kenzbladi.ma   (Role: admin)
echo [Pro]   Email: pro@kenzbladi.ma     (Role: pro)
echo [Client]Email: client@kenzbladi.ma  (Role: client)
echo.
echo * Assurez-vous que la base de donnees MongoDB est active.
echo =======================================================
pause >nul