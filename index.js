const express = require("express");
const dotenv = require("dotenv");


dotenv.config()

const app = express()
const port = process.env.PORT || 4444

app.get( '/', ( req, res ) => {
  res.send('Main Path /')
} )

app.listen( port, () => {
  console.log(`Server is runnning on port `, port )
})