const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const { usersDB } = require( '../controllers/registerController' );

let registeredUser = ''

router.use( ( req, res, next ) => {
  
  //TODO 
  /**
    * check if api_key is correct and is in the list
    **/
  
  console.log(`videos.js - line: 11 ->> req.params`, req.query.api_key)



  const isRegistered = uuid.validate(req.query.api_key)

  registeredUser = req.query.api_key

  if (isRegistered && usersDB.users.includes(req.query.api_key)) {
    
    console.log(`videos.js - line: 18 ->> is registered`, )
    next()

  } else {
    console.log( `videos.js - line: 21 ->> not registered`, )
    res.status(401).json({message: 'Please register!'})
  }
  
})

//  route /videos
router.route( "/" ).get( ( req, res ) => {
  const videos = require( '../data/videos.json' )
  // console.log(`videos.js - line: 32 ->> videos`, videos)
  res.status( 200 ).json(videos[registeredUser]);
});

router.route("/").post((req, res) => {
  res.send("POST /videos");
});

// route /videos/:id
router.route( "/:id" ).get( ( req, res ) => {
  res.send(`GET /videos/${req.params.id}`);
});

module.exports = router;
