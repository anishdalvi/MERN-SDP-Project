const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    }
},
{
    timestamps: true
}
)


const dataModel = mongoose.model('Data' , dataSchema )
module.exports = dataModel