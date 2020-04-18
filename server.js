const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//parse requests of content type: application/json
app.use(bodyParser.json());

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get('/', (req, res) =>
  res.json({ message: 'Welcome to bezkoder application' })
);

// app.post('/', (req, res) => res.send('Hello world'));
// app.put('/', (req, res) => res.send('Hello world'));
// app.delete('/', (req, res) => res.send('Hello world'));
require('./routes/customer.routes.js')(app);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
