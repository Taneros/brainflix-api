const express = require("express");
const dotenv = require("dotenv");
const videos = require("./routes/videos");

dotenv.config();

const app = express();
const port = process.env.PORT || 4444;

app.use(express.json())
app.use("/videos", videos);

app.get("/", (req, res) => {
  res.send("Main Path /");
} );

app.get( "/register", ( req, res ) => {
  res.send( "Register /register" )
  
  //TODO 
  /**
    * desnd
    **/
})

app.listen(port, () => {
  console.log(`Server is runnning on port `, port);
});
