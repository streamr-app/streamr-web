# Streamr Web

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![CircleCI](https://circleci.com/gh/streamr-app/streamr-web.svg?style=shield)](https://circleci.com/gh/zebras-filming-videos/streamr-web)

![Streamr Screenshot](screenshot.png)

Streamr is a React-Redux SPA deployed to Heroku.

## Up and Running

```
npm install
npm run dev
```

Then visit [localhost:5000](http://localhost:5000).

## Production

In production, the site runs on Express and just uses the history API fallback middleware. To run in production:

```
export NODE_ENV=production
npm run dist
npm start
```

## Testing

```
npm test
```
