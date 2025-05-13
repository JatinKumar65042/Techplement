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
        <h2 className='text-xl fond-bold mb-2'>
            Quote of the Day
        </h2>
        {quoteData && (
            <>
                <p className='text-lg italic text-gray-700'>"{quoteData.quote}"</p>
                <h5 className='mt-2 text-right text-sm font-medium text-gray-500'>-{quoteData.author}</h5>
            </>
        )}
    </div>
  )
}

export default RandomQuote