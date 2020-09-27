# radio

Application that greets authenticated users.

## Usage

### Setup

To load modules, run:

`npm install`

### Start

To start the app, run:

`npm run start`

**NOTE:** App starts on port `8080` by default.

To customize port, use `PORT` environment variable. For example:

`PORT=3000 npm run start`

### Tests

To run tests, run:

`npm run test`

Tests include several groups of unit tests and a couple of end-to-end tests.

## API

This app has only two routes.

`GET /greeting`

This route returns greeting string for authenticated users.

Authentication is performed providing a valid auth token in `X-Auth-Token` header

### Example

Request:

`GET http://localhost:8080/greeting`

Response:

```
"Hello!"
```

## Limitations

This app has several known limitations:

- There is no validation of input parameters.
- There is no documentation generated apart of the description in this document.
- Database implementation has been simplified to a hardcoded list of users.
- Authentication process is simplified to the search of user by his credentials or token.

## Notable Features

This project uses:

- ESLint to find problems in code. See: https://eslint.org
- Prettier to auto-format code. See: https://prettier.io
