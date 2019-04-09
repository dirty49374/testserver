require('dotenv').config();

const port = process.env.APP_PORT || 80;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index', {
    headers: req.headers
  });
});

app.listen(port, () => console.log(`listening on ${port} ...`));
