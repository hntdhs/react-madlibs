import React, { useState }  from 'react';
import './App.css';

import WordsForm from './Form2';


function App() {
  const [story, setStory] = useState("");
  function handleSubmit(story) {
    console.log(story);
    setStory(story)

    // do something with form data, run Story component

  }
  function emptyStory() {
    setStory("");
  }
  return (
    <div className="App">
      <WordsForm onSubmit={handleSubmit} onEmpty={emptyStory} /> 
      {story}
    </div>
  );
}

export default App;

// look at lights out - functions in board.js don't return html, cell.js does that and board.js imports