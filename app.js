const express = require('express')
const app = express()
const port = 8080

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