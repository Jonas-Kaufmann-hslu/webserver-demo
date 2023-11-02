const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        .main-text {
          text-align: center;
          font-size: 32px;
          color: blue;
        }
        .smaller-text {
          text-align: center;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="main-text">Hallo du, wie geht es dir?</div>
      <div class="smaller-text">Hello World!</div>
    </body>
    </html>
  `)
})

app.get('/port', (req, res) => {
  res.send(`Currently used port is ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
