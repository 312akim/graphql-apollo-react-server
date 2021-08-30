const express = require('express')
const app = express();
const port = 4000
const userData = require("./MOCK_DATA.json");

app.get('/', (req, res) => {
  res.send('Hello World! ' + userData[0].last_name);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})