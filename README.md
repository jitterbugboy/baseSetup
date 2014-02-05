Base Setup
=====

my base for Projects

It includes an isolated js setup with node running karma unit tests using: requirejs, sinon.js , jasmine-jquery (for fixtures), karma-coverage.

TODO : cleanup files, add release folder and build


install
//base
karma						: npm install karma
coverage        : npm install karma-coverage --save-dev

//launchers
safari launcher	: npm install karma-safari-launcher --save-dev
opera						: npm install karma-opera-launcher --save-dev

VM Launcer			:npm install karma-ievms --save-dev