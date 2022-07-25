// -------------- MODO FORK -------------------
//pm2 start server.js --name="Server1" --watch -- 8081 FORK

// -------------- MODO CLUSTER -------------------
//pm2 start server.js --name="Server2" --watch -- 8082 CLUSTER

//pm2 list
//pm2 delete id/name
//pm2 desc name
//pm2 monit
//pm2 --help
//pm2 logs
//pm2 flush

// ------------------ NGINX ----------------------
//http://nginx.org/en/docs/windows.html
//start nginx
//tasklist /fi "imagename eq nginx.exe"
//nginx -s reload
//nginx -s quit