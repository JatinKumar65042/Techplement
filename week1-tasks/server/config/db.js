const mongoose = require('mongoose') ;
const colors = require('colors') ;

const connectDB = async (req , res) => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`) ;
        console.log(`Connected To Database ${mongoose.connection.host}`.white.bgCyan) ;
        console.log(`Server running on http://localhost:${process.env.PORT}/api/v1/quotes/`) ;
    } catch (error) {
        console.log("Error in connecting database".bgRed , error) ;
    }
}

module.exports = connectDB ;