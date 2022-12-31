const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const encrypt = (text) => {
    return bcrypt.genSalt(5)
    .then(salt => {
        return bcrypt.hash(text, salt)
    })
}

const compare = (text, hash) => {
    return bcrypt.compare(text, hash)
}

const createAcessToken = (email) => {
    return jwt.sign({email}, process.env.JWT_SECRET, {
       expiresIn:"12h"
    })
}

const generateOTP =  () => {
    return Math.floor(Math.random() * Math.pow(10,6))
}

module.exports = {                  // destructuring
    encrypt,
    compare,
    createAcessToken,
    generateOTP
}