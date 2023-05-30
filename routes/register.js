const express = require( 'express' )
const router = express.Router()                    
const {handleNewRegistration} = require( '../controllers/registerController' )

router.use( ( req, res, next ) => {
  next()
})

router.post( '/', handleNewRegistration )

module.exports = router