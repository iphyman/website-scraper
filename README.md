<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A simple web scraper to  extract data from your favourite websites </p>

## Description

This simple nestJS app allows you to extract data from any website, for the sample provided in the app service, we defined a getCoingecko method to extract cryptocurrency name, logo and symbol. The extracted data is then either written to a file or outputed to the route specified in the app controller.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
