# Movie searcher

1. [Link to hosted App](https://arthur199212.github.io/react-movie-searcher/)
2. Used technologies: JS (ES6+), React (Hooks, Lazy, Suspense), Redux (Hooks), redux-thunk, redux-persist, SSR (server-side rendering with `redux-saga`, custom styles, Material-UI styles), [public API](https://reactjs-cdp.herokuapp.com/api-docs).

### Information: to check work of SSR with simple Express server please visit `ssr branch`.
#### Done for SSR:
1. Async actions, redux provides initial state from server.
2. Server app handles query params to compute initial state.
3. Route masking (for example like `localhost/search/Search%20Query`).

## Available Scripts

In the project directory, you can run:

### `npm i`
For installing all new dependencies from the project

### `npm start`
It will open [http://localhost:4000](http://localhost:4000) to view app in the browser.

The page will reload if you make edits.<br />


### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified.
After this app is ready to be deployed.

### `npm run deploy`

Publishes app to the gh-pages so it will be available by the [link](https://arthur199212.github.io/react-movie-searcher/)

### Screenshots

![main_page_1](https://raw.githubusercontent.com/Arthur199212/react-movie-searcher/gh-pages/01.PNG)

![main_page_2](https://raw.githubusercontent.com/Arthur199212/react-movie-searcher/gh-pages/02.PNG)

![detailed_page_3](https://raw.githubusercontent.com/Arthur199212/react-movie-searcher/gh-pages/03.PNG)
