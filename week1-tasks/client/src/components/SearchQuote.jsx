import axios from 'axios'
import React, { useState } from 'react'

const SearchQuote = () => {

    const [author, setAuthor] = useState("") ;
    const [quotes, setQuotes] = useState([])
    const [message, setMessage] = useState("")

    const handleSearch = async () => {
        try {
            const { data } = await axios.post('https://techplement-155h.onrender.com/api/v1/quotes/search', { author });
        
            setQuotes(data.quotes);   
            setMessage(data.message); 
          } catch (error) {
            console.error(error);

            if (error.response && error.response.status === 404) {
                setMessage("No quotes found for this author.");
            } else {
                setMessage("An error occurred while fetching quotes.");
            }
            setQuotes([]);
          }
    }

  return (
    <div className='bg-white shadow-md rounded-md p-6'>
        <h2 className='text-xl fond-bold mb-4 '>Search Quotes by Author</h2>
        <div className='flex flex-col sm:flex-row gap-2 mb-4'>
            <input 
                type="text"
                placeholder='Enter author name'
                className='border border-gray-300 rounded-md p-2 flex'
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                onClick={handleSearch}
            >
                Search
            </button>
        </div>

        {message && (
            <p className="text-sm text-gray-600 mb-2">{message}</p>
        )}

        {quotes.map((q) => (
            <div key={q._id} className='border-l-4 border-blue-400 pl-4 mb-3'>
                <p className='italic text-gray-700'>"{q.quote}"</p>
            </div>
        ))}
    </div>
  )
}

export default SearchQuote