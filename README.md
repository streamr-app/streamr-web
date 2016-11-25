# Streamr Web Application

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![CircleCI](https://circleci.com/gh/zebras-filming-videos/streamr-web.svg?style=shield)](https://circleci.com/gh/zebras-filming-videos/streamr-web)

## Up and Running

```
npm install -g yarn
yarn
yarn start
```

Then visit [localhost:5000](http://localhost:5000).

## Testing

```
yarn test
```

Note that running the test command will also lint the project using `standard`.

## Storybook

This project uses [React Storybook](https://getstorybook.io) to provide a staging area for testing out reusable components. To view it, run

```
yarn run storybook
```

## Contributing

This project uses [Yarn](https://yarnpkg.com) to lock dependencies. Please avoid installing dependencies directly through NPM.
