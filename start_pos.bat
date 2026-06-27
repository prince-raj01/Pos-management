@echo off
title Manoj Vaishnav Hotel POS Terminal
cd /d "%~dp0"
echo Starting local POS network server...
start /b node server.js >nul 2>&1
timeout /t 2 >nul
echo Opening Staff POS Portal...
start http://localhost:8080/index.html
exit
