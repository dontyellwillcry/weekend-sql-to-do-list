const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/TODO.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/TODO', todoRouter);

app.use(express.static('server/public'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});