## Things you'll need

 - A text editor such as Atom (we like [Facebook's Nuclide](http://nuclide.io/) package)
 - [Node.js](https://nodejs.org/)
 - [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon)

## Getting started

First, fork this repo to your Github account.

Then:

```
git clone git@github.com:<your-account>/flow.git
cd flow
npm install
npm start
```

This will start a live-reloading dev server in the project root.  It will also
run a mock backend server on http://localhost:8080 (by default; change the
value of devPort in `webpack.config.js` to change it!)

Navigate to http://localhost:3000 and you'll see your content.

API requests on `http://localhost:3000/api` will be proxied to
`http://localhost:8080/`.
