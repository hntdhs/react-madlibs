import React from "react";

// contains the story that the user's chosen words will be entered into, and a button that will appear below the story that will empty the input fields and allow the user to make a new story
function Story({color, noun1, adjective, noun2}, onEmpty) {
    const story = <div>There was a {color} {noun1} who loved a {adjective} {noun2}.</div>
    return (
        <div>
            <h1>{story}</h1>
            <button onClick={onEmpty}>Go Again</button>
        </div>
    )
    
}

export default Story;