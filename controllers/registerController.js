const fsPromises = require( 'fs' ).promises
const path = require('path') 
const uuid = require( 'uuid' )

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
    
  } catch (error) {
    res.status(500).json({'message': error.message})
  }
}


module.exports = {handleNewRegistration}