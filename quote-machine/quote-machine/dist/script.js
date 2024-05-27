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

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, "\"",
    quote, "\""), /*#__PURE__*/

    React.createElement("div", { id: "author" }, "- ",
    author), /*#__PURE__*/

    React.createElement("button", { id: "new-quote", onClick: handleNewQuote }, "New Quote"), /*#__PURE__*/


    React.createElement("a", { id: "tweet-quote", href: tweetQuote, target: "_blank", rel: "noopener noreferrer" }, "Tweet Quote")));




};

// Render the QuoteMachine component into the root element
ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById('root'));