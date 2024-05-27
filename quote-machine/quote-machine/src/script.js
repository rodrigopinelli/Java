// Import React and ReactDOM from CDN
import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

// Create the QuoteMachine component
const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

  return (
    <div id="quote-box">
      <div id="text">
        "{quote}"
      </div>
      <div id="author">
        - {author}
      </div>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer">
        Tweet Quote
      </a>
    </div>
  );
};

// Render the QuoteMachine component into the root element
ReactDOM.render(<QuoteMachine />, document.getElementById('root'));
