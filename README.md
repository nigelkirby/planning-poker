# Planning poker

Simple planning poker SPA. Authed with Firebase using githubAuthProvider.

## Install Dependencies

```
yarn
```

## Setup

`/src/firebase.js` contains an example config, to run a new version [create a firebase app](http://firebase.google.com). Then copy the config from the 'Add firebase to your web app' link. Then go to Authentication -> Sign-In Method and choose the GitHub Auth provider, follow the instructions for creating and registering a GiHub OAuth app.

## Dev Server

```
yarn start
```

## Build

```
yarn build
```
This will create `/dist`, by default the firebase config will allow requests from `localhost`. If the site is served from another domain it will have to be authorized from the Authentication -> Sign-In Method tab of the firebase project.
