import React, {useState} from 'react';
import './index.css';

// PERFORMANCE

const Form = (props) => {
    const [input, setInput] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.addItem(input);
    }

    return (
        <form onSubmit={onSubmit} className='form'>
            <input 
                type="text"
                name="item"
                onChange={evt => setInput(evt.target.value)}
            />
            <button>Add an Item!</button>
        </form>
    );
}

export default Form;