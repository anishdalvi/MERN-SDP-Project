const jwt = require('jsonwebtoken')

module.exports = ( req, res, next ) => {

    try {
        const accessToken = req.headers.authorization
        if(!accessToken){
            res.json({message: "No Access Token"})
            throw Error('No Access Token')
        }

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET)
        
        req.email = decoded.email
        //req.id = decoded.id

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized Access",
            error: error.message
        })
    }

}