const { auth, requiresAuth } = require('express-openid-connect');
const express = require('express');

const app = express();
const port = 4000

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4000',
  clientID: 'ZQp0HUSgpNcWbJ3VFYwKLh0ZUZjR47td',
  issuerBaseURL: 'https://dev-57orj8gw.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


app.listen(port, () => {
    console.log(`Auth server listening on port : ${port}`)
})
