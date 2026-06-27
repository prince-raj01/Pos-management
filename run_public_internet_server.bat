@echo off
title Manoj Vaishnav Hotel POS Public Server
cd /d "%~dp0"
echo Starting Manoj Vaishnav Hotel POS Network Server...
start "" node server.js
echo.
echo Starting Secure Public Tunnel...
echo Anyone in the world can open the POS link printed below.
echo.
ssh -o StrictHostKeyChecking=no -R 80:localhost:8080 nokey@localhost.run
pause
