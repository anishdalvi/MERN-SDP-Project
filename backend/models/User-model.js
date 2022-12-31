const mongoose = require('mongoose')
const { generateOTP } = require('../utils')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    otp: {
        type:String
    },
    verified:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})


userSchema.pre("save", function(){
    this.otp = generateOTP()
})


const userModel = mongoose.model('User' , userSchema )
module.exports = userModel