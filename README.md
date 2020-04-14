# node-server

This repo is an effort to configure a foundational config of modern web dev tools.

Current tools configured are: Git, Node, Express, Cypress (E2E testing), Webpack, Babel,
Typescript, and Docker. 

Future tools to be included are: Sentry.io (error reporting)

For Node:

Use 'npm run build' to build dist files for deployment
View app by opening './dist/index.html' in browser

Use 'npm run server' for development
View app by navigating to 'localhost:8080' in browser

For Docker:

Create docker image by typing '[sudo] docker build -t richardcarrigan/node-server .'
Verify success by running '[sudo] docker images'
Start docker container by running '[sudo] docker run -p 49160:8080 -d richardcarrigan/node-server'
Verify success by running '[sudo] docker ps'
View app by navigating to 'localhost:49160' in browser or view server response by running 'curl -i localhost:49160'
