import RandomQuote from './components/RandomQuote'
import SearchQuote from './components/SearchQuote'

function App() {

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10'>
      <div className='max-w-2xl w-full'>
        <RandomQuote/>
        <SearchQuote/>
      </div>
    </div>
  )
}

export default App
