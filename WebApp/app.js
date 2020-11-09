const express = require('express')
const app = express()
const port = process.env.PORT||3000;

let appInsights = require("applicationinsights");
appInsights
  .setup("5d8938b0-d7b6-425c-beb1-0842fe5f81c4")
  .start()

app.set("view engine", "jade");

app.get('/', (req, res) => {
  res.render("index");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})