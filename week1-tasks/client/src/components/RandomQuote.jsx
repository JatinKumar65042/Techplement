import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomQuote = () => {

    const [quoteData, setQuoteData] = useState("") ;

    const fetchRandomQuote = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/api/v1/quotes/random')
    
            if(data.success){
                setQuoteData(data.data) ;
            }
        } catch (error) {
            console.log(error) ;
        }
    }

    useEffect(() => {
        
        fetchRandomQuote() ;
    } , [])

  return (
    <div className='bg-white shadow-md rounded-md p-6 m-4 text-center'>
        <h2 className='text-xl fond-bold mb-2 text-yellow-600'>
            Quote of the Day
        </h2>
        {quoteData && (
            <>
                <p className='text-lg italic text-gray-800'>"{quoteData.quote}"</p>
                <h5 className='text-right text-sm text-gray-600 mt-2'>-{quoteData.author}</h5>
            </>
        )}
    </div>
  )
}

export default RandomQuote