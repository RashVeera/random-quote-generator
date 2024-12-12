import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteData,setquoteData]=useState("")

  const fetchQuote = async ()=>{
    const response = await fetch("https://dummyjson.com/quotes/random")
    const data = await response.json()
    setquoteData(data)
    navigator.clipboard.writeText(`${data.quote} - ${data.author}`)
  }

  useEffect=(()=>{
    fetchQuote()
  },[])
  return (
    <div className="App">
            <button onClick={fetchQuote}>Random Quote</button>

     { quoteData && <div className='quoteContainer'>
        <h2>{quoteData.quote}</h2>
        <p>-{quoteData.author}</p>
      </div>
}
    </div>
  );
}

export default App;
