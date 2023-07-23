
const User = require('../models/User-model')
const asyncHandler = require('express-async-handler')
const { compare, encrypt, createAcessToken} = require('../utils') 
const { sendMail } = require('../config/mailer')
//const { create } = require('../models/User-model')



// @desc Register User
// @route POST /api/users/register
// @access Public

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body
    let resData
    if(!(name && email && password)){
        res.status(400)
        throw new Error('Username, Email and Password not found')
    }

    // Check if user exists

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).json({
            message: "User Already Exist"
        })
        throw new Error('User already exists')
    }


    // Hash Password

   /*  const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) */

    const hashedPassword = await encrypt(password)

    // Create User

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        //const { id, name, email } = user
        
        resData = user.toJSON()
        //console.log("user contro", resData);
        resData.access_token = createAcessToken(resData.email, resData.id)
        const { id, name, email, access_token, otp } = resData
        sendMail(email, name, otp)
        //console.log("after resData",resData);
        //console.log("In console after to JSON ",resData);
      
        res.status(201).json({
            message: "Registration of User "+ name+" is Successful",
            data: {id, name, email, access_token}
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid User Data')
    }





})



// @desc Authenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {

    const { email, password } = req.body

    // Check for Email
    const user = await User.findOne({email})
    console.log(user.id);
    if (user && (await compare(password, user.password))){
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            access_token: createAcessToken(user.email, user.id)
        })
    } 
    else{
        res.status(400).json({message:"Invalid Credentials"})
        throw new Error('Invalid Credentials')
    }

    
})


// @desc Get User data
// @route POST /api/users/getProfile
// @access Private
const getProfile = asyncHandler( async (req, res) => {

    const user = await User.findOne({email: req.email})
    console.log(user);
    if (!user){
        res.status(400).json({message:"User not found"})
        throw Error('User not Found')
    }

    resData = user.toJSON()

    delete resData.password

    return res.status(200).json({
        message: "Profile fetch successful",
        data : resData
    })
 
 
 
     
 })

 // @desc Post User data
// @route POST /api/users/verify
// @access Private
const verifyEmail = asyncHandler( async (req, res) => {

    const user = await User.findOne({email: req.email}, { otp:1, email:1})
    user.toJSON()
    console.log("verify ",user);

    if (!user){
        res.status(422).json({message:"Email Verification Failed"})
        throw Error('Email Verification Failed')
    }

    if (user.otp  !== req.body.otp){
        res.status(400).json({message:"Invalid OTP"})
        throw Error('Invalid OTP')
      }

    await User.findOneAndUpdate({ email: req.email }, { verified: true })
    
    

    return res.status(200).json({
        message: "Email Verified Successfully",
        data : user
    })
 
})
 








module.exports = {
    registerUser,
    loginUser,
    getProfile,
    verifyEmail
}