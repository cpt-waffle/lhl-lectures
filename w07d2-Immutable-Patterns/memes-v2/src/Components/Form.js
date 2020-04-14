import React, { useState } from 'react';

function Form(props) {
    console.log("PROPS FOR FORM =====>");
    console.log(props);

    const [name, handleName] = useState(''); 
    const [url, handleUrl] = useState(''); 

    function handleNameInput(evt) {
        // debugger
        // console.log(evt.target.value);
        handleName(evt.target.value);
    }

    function handleUrlInput(evt) {
        handleUrl(evt.target.value);
    }

    function handleOnSubmit(evt) {
        evt.preventDefault();
        props.add(name, url);
    }


    return (<form onSubmit={handleOnSubmit}>
        <h2>Add a Meme</h2>
        <p>Meme name:<input value={name} onChange={handleNameInput} name='name' type="text"/></p>
        <p>URL: <input value={url} onChange={handleUrlInput} name='url'  type="text"/></p>
        <button>ADD A FRESH MEME!</button>
    </form>)
}

export default Form;