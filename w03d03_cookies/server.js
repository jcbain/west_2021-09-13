const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const pageText = require('./data/languages.json');

console.log(pageText)

const users = {
  123: {
    id: 123,
    email: 'scully@xfiles.com',
    password: 'abcd'
  }
}


const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user
    }
  }
  return null
}

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.post('/login', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  // check if client sent down blank email or password
  if( !email || !password ) {
    return res.status(400).send("email or password cannot be blank");
  }

  const user = findUserByEmail(email);

  // if that user exists with that email
  if (!user) {
    return res.status(400).send('no user with that email was found');
  }

  // does the password provided from the request
  // match the password of the user
  if (user.password !== password) {
    return res.status(400).send('password does not match')
  }

  res.cookie('user_id', user.id);
  res.redirect('/secrets');
})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // we want make sure that email and password are filled
  if( !email || !password ) {
    return res.status(400).send("email or password cannot be blank");
  }

  // check to see if email exists in database already
  const user = findUserByEmail(email);

  if(user) {
    return res.status(400).send('user with that email currently exists')
  }

  const id = Math.floor(Math.random() * 2000) + 1;

  users[id] = {
    id: id,
    email: email,
    password: password
  }

  console.log("users", users)
  res.redirect('/login')
})

app.post('/logout', (req, res) => {
  // get rid of the cookie
  res.clearCookie('user_id');
  res.redirect('/login');
})

app.get('/secrets', (req, res) => {
  const userId = req.cookies.user_id;

  // if they are not logged in (in other word, they don't have a user_id cookie)
  if(!userId) {
    return res.status(401).send('you are not logged in')
  }

  const user = users[userId];

  if (!user) {
    return res.status(400).send('you have an old cookie')
  }

  const templateVars = { email: user.email }

  res.render('secrets', templateVars);
})

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

// GET /home
app.get('/home', (req, res) => {

  const selectedLanguage = req.cookies.language || 'el';

  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('homepage', templateVars);
})

// GET /about
app.get('/about', (req, res) => {
  const selectedLanguage = req.cookies.language || 'el';

  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }

  res.render('about', templateVars);
})

app.get('/languages/:language_code', (req, res) => {
  console.log('req.params', req.params);
  const languageCode = req.params.language_code;

  res.cookie('language', languageCode)
  res.redirect('/home')
})


app.listen(port, () => console.log(`server listening on port ${port}`));