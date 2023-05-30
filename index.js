const express = require("express");
const dotenv = require("dotenv");
const videos = require("./routes/videos");
const register = require("./routes/register")

dotenv.config();

const app = express();
const port = process.env.PORT || 4444;

// built-in middleware
app.use( express.json() )

//routes
app.use( "/videos", videos );
app.use("/register", register )

app.get("/", (req, res) => {
  res.send("Main Path /");
} );

app.listen(port, () => {
  console.log(`Server is runnning on port `, port);
});
