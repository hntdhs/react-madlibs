import React, { useState } from "react";
import Story from './Story.js';

// creates the form a user enters words into in order to create the story. uses controlled components to control the state, and when a user submits, the words they entered are entered into the Story component and shown on screen. 
const WordsForm = ({onSubmit, onEmpty}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(formData);
        const story = Story(formData, onEmpty);
        console.log(story);
        onSubmit(story)
    }

    const [formData, setFormData] = useState({
        color: "",
        noun1: "",
        adjective: "",
        noun2: ""
    });
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input id="color" name="color" value={formData.color} onChange={handleChange} />

            <label htmlFor="noun1">Noun:</label>
            <input id="noun1" name="noun1" value={formData.noun1} onChange={handleChange} />

            <label htmlFor="adjective">Adjective:</label>
            <input id="adjective" name="adjective" value={formData.adjective} onChange={handleChange} />

            <label htmlFor="noun2">Noun2:</label>
            <input id="noun2" name="noun2" value={formData.noun2} onChange={handleChange} />
            <button>See the story</button>
        </form>
    );
};

export default WordsForm;