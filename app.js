const express = require('express')
const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.get('/', (req, res) => {
  res.send('Why, hello there!');
})

app.get('/checkWord/:word', (req, res) => {
  console.log(req.params);
  res.send('Hello World!')
})

app.get('/checkWords/:words', (req, res) => {
  console.log(req.params);
  res.send(true);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})