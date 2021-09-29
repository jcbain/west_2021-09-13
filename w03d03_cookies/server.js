const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.listen(port, () => console.log(`server listening on port ${port}`));