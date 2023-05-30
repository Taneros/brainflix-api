const fsPromises = require( 'fs' ).promises
const path = require('path') 
const uuid = require( 'uuid' )
const videos = require('../data/videos.json')

console.log(`registerController.js - line: 6 ->> videos`, videos)

const usersDB = {
  users: require( '../data/registration.json' ),
  setRegistration ( user ) {
    this.users = user
  }
}

const handleNewRegistration = async ( req, res ) => {
  try {
    const newUUID = uuid.v4()

    usersDB.setRegistration( [...usersDB.users, newUUID] )
    
    fsPromises.writeFile( path.join( __dirname, '..', 'data', 'registration.json' ), JSON.stringify( usersDB.users ))

    res.status( 201 ).json( {api_key: newUUID} )

    // create key in json 

    fsPromises.writeFile(path.join( __dirname, '..', 'data', 'videos.json'), JSON.stringify({...videos, [newUUID]: videos.default}))
    
  } catch (error) {
    res.status(500).json({'message': error.message})
  }
}


module.exports = {handleNewRegistration}