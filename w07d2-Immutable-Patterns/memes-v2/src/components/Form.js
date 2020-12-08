// import react
import React, { useState } from 'react';

// make a function that returns jsx

function Form(props) {
    console.log('props from FORM.js', props);
    const [url, setUrl] = useState('');
    const handleOnChange = (evt) => {
        setUrl((evt.target.value));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddMeme(url);
    }

    // returns some JSX
    return (
    <form onSubmit={handleSubmit}>
        <p><input onChange={handleOnChange} type='text' name='url' value={url}></input></p>
        <p><button>submit</button></p>
    </form>
    )
}
// export the component
export default Form;