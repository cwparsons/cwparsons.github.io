# Portfolio

[![devDependency Status](https://david-dm.org/cwparsons/cwparsons.ca/dev-status.svg)](https://david-dm.org/cwparsons/cwparsons.ca#info=devDependencies) [![Build status](https://travis-ci.org/cwparsons/cwparsons.ca.svg)](http://travis-ci.org/cwparsons/cwparsons.ca)

## Build Instructions

1. Install [NodeJS](http://nodejs.org/).

2. Run `npm install` from command line at root project folder.

3. Use `npm run` to build:

	- `npm run build` will create a debug/test version of the site (i.e. LESS compilation)
	- `npm run production` will create a production version of the site (i.e. JavaScript and CSS concatenated and minified)
	- `npm run serve` will create the debug/test version of the site, then create a simple testing server
	- `npm run deploy` will deploy the production version of the site to cwparsons.ca