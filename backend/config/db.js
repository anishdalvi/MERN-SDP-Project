const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI



/* module.exports = () => {
    mongoose.set('strictQuery', true)   // suppressed warning
    mongoose.connect(MONGO_URI, (error) => {
        if(error){
            console.log("Mongo Error: ", error);
            throw error
        }
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    })
} */

mongoose.set('strictQuery', true)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = connectDB