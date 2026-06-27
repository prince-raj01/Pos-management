@echo off
title Manoj Vaishnav Hotel Owner Dashboard
cd /d "%~dp0"
echo Starting local POS network server...
start /b node server.js >nul 2>&1
timeout /t 2 >nul
echo Opening Owner Dashboard...
start http://localhost:8080/owner.html
exit
