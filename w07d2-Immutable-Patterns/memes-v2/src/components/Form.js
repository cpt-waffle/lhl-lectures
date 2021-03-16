// import react
import React, { useState } from 'react';
import './Form.css'
// make a function that returns jsx

function Form(props) {

    const [val, setVal] = useState("");
    console.log(props);
    const handleOnChange = (evt) => {
        setVal(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit', val);
        props.handleSubmit(val);
    }

    // returns some JSX
    return (
        <form onSubmit={onSubmit} className="meme-form">
           <input type='text' name="memeURL" value={val} onChange={handleOnChange}/>
           <button>Submit</button>
        </form>
    )
}
// export the component
export default Form;