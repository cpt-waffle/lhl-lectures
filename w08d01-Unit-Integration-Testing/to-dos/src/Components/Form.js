import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = evt => {
        evt.preventDefault();
        if (val) {
            props.addItem(val);
        } else {
            setError(true);
        }
    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <input placeholder={'enter todo'} className="addForm-input" type="text" name="newItem" value={val} onChange={evt => changeVal(evt.target.value)}/>
                <button className="submit-btn">Add</button>
            </form>
            {error && <p>CANNOT BE BLANK</p>}
        </div>
    )
}

export default Form;