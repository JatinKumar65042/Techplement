import RandomQuote from './components/RandomQuote';
import SearchQuote from './components/SearchQuote';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/11/33/57/30/240_F_1133573056_912TX5nGkcGQHtKvNk7ZJEAotM2hv57O.jpg')`,
      }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 max-w-2xl w-full shadow-lg">
        <RandomQuote />
        <SearchQuote />
      </div>
    </div>
  );
}

export default App;
