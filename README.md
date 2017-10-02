# Sample app

## Structure of the app

* Entrypoint of this node module is index.js
* the source files are contained in [src](./src) directory
** Client files are contained in [src/client](./src/client) directory
** Server side files is contained in the [src/server](./src/server) directory

## Keeping it fresh

Code formatting is an essential requirement for easy maintainence of an application. This project uses [eslint](https://eslint.org/) for code linting
* eslint configs are stored in [.eslintrc.yml](./.eslintrc.yml)
* run `npm run lint-server` to see any lint errors

## Testing

This project uses BDD flavour of testing using [chaijs](http://chaijs.com/) with [mocha](https://mochajs.org/) test framework.
run `npm test` for tests

## CI

The project had added the npm script for CI for the app validation.
* After cloning the project in your CI server add below steps to enable CI validations

* `npm i`
* `npm run ci`
