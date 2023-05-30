const express = require("express");
const router = express.Router();


router.use( ( req, res, next ) => {
  
  next()
})

//  route /videos
router.route("/").get((req, res) => {
  res.send("GET /videos");
});

router.route("/").post((req, res) => {
  res.send("POST /videos");
});

// route /videos/:id
router.route( "/:id" ).get( ( req, res ) => {
  res.send(`GET /videos/${req.params.id}`);
});

module.exports = router;
