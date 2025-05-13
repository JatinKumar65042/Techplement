const Quote  = require("../model/quote.model.js")

const getQuote = async (req , res) => {
    try {
        const quotes = await Quote.find();
        if (quotes.length === 0) return res.status(404).json({ error: 'No quotes available' });

        const today = new Date().toISOString().split('T')[0]; // e.g. "2025-05-13"
        const dayNumber = parseInt(today.replace(/-/g, '')); // e.g. 20250513
        const index = dayNumber % quotes.length;

        const quoteOfTheDay = quotes[index];
        return res.status(200).json({
            success : true ,
            message : "Quote fetched successfully",
            data : quoteOfTheDay
        })

    } catch (error) {
        console.error('Error fetching QOTD:', error);
        res.status(500).json({ error: 'Server error' });
    }
}

const searchQuote = async (req , res) => {

    try {
        const {author} = req.body ;

        if (!author || typeof author !== 'string' || author.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Author name is required in request body."
            });
        }

        const quotes = await Quote.find({author : { $regex: new RegExp(author, 'i') }})
        if (quotes.length === 0) {
            return res.status(404).json({
              success: false,
              message: "No quotes found for this author"
            });
        }
        return res.status(200).json({
            success : true ,
            message : "Quotes fetched successfully",
            quotes
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Error in fetching all these quotes",
        })
    }
}

const addQuote = async (req , res) => {
    const {quote , author} = req.body ;
    if(!quote || !author){
        return res.status(400).json({
            success : false ,
            message : "Please provide all details",
        })
    }

    // try {
    //     const existingQuote = await Quote.findOne({ quote: text.trim() });
    
    //     if (existingQuote) {
    //       return res.status(409).json({ error: 'This quote already exists.' });
    //     }
    // } catch (error) {
    //     return res.status(500).json({
    //         success : false ,
    //         message : "Error in checking existing quote" ,
    //     })
    // }

    try {
        const newQuote = await Quote.create({
            quote , author
        })
        return res.status(201).json({
            success : true ,
            message : "Quote added Successfully" ,
            data : newQuote
        })
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : "Error in adding quote" ,
        })
    }
}

module.exports = {getQuote , searchQuote , addQuote} ;