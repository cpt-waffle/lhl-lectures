import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [error, toggleError] = useState(false);
    const handleSubmit = evt => {
        evt.preventDefault();
        if (val) {
            props.addItem(val);
            changeVal('');
            toggleError(false);
        } else {
            toggleError(true);
        }
    }

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input placeholder={'enter todo'} className="addForm-input" type="text" name="newItem" value={val} onChange={evt => changeVal(evt.target.value)}/>
            <button className="submit-btn">Add</button>
            {error && <h5>CANNOT BE BLANK</h5>}
        </form>
    )
}

export default Form;