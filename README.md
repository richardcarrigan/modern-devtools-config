# node-server

This repository was inspired by **Mehul Mohan's** FreeCodeCamp article [*'10 Popular Web Development Tools that Every Programmer Should Know'*](https://www.freecodecamp.org/news/handy-web-development-toolkit). Because I had heard of many of these tools but hadn't used all of them, let alone together on a single project, I was curious how, and most importantly why, I would configure all of these tools to work in harmony. It took quite a bit of effort and many hours of sifting through the various documentation pages, but here it is.

Current tools configured (in the most efficient order of installation) are: Git, Node, Express, Cypress (E2E testing), Webpack, Babel, Typescript, Sentry, and Docker.

## Running Instructions

### For Node:

1. Use 'npm run server' to do a temporary build
2. View app by navigating to 'localhost:8080' in browser or view server response by running 'curl -i localhost:8080'
3. If satisfied, use 'npm run build' to build dist files for deployment
4. View app by opening './dist/index.html' in browser

### For Docker:

1. Create docker image by typing '[sudo] docker build -t richardcarrigan/node-server .'
2. Verify success by running '[sudo] docker images'
3. Start docker container by running '[sudo] docker run -p 49160:8080 -d richardcarrigan/node-server'
4. Verify success by running '[sudo] docker ps'
5. View app by navigating to 'localhost:49160' in browser or view server response by running 'curl -i localhost:49160'

## Next Steps

* Add webpack support for SASS
* Improve boilerplate content

Feedback and constructive criticism is always welcome. Also, if you would like more clarification on the reasoning behing using a particular tool, or help understanding what a portion of code means/does, I'm always happy to connect with others.

Enjoy!

-Richard Carrigan
