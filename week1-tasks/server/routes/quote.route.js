const express = require('express') ;
const { getQuote, searchQuote, addQuote } = require('../controllers/quote.controller.js');


const router = express.Router() ;

router.get('/random' , getQuote) ;

router.post('/search' , searchQuote) ;

router.post('/addquote' , addQuote) ;

module.exports = router ;