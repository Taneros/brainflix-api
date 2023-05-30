const express = require( 'express' )
const {handleNewRegistration} = require( '../controllers/registerController' )
const router = express.Router()

router.use( ( req, res, next ) => {
  next()
})

router.post( '/', handleNewRegistration )

module.exports = router