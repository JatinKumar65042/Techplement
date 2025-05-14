const express = require('express') ;
const cors = require('cors') ;
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const colors = require('colors') ;
const quoteRouter = require('./routes/quote.route.js');

const PORT = process.env.PORT || 5000 ;
const app = express() ;
dotenv.config() ;
connectDB() ;

app.use(cors()) ;
app.use(express.json()) ;
app.use('/api/v1/quotes' , quoteRouter)
console.log("On startting the server") ;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));