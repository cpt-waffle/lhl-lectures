import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [err, toggleErr] = useState(false);
    const handleSubmit = evt => {
        evt.preventDefault();
        if (val) {
            props.addItem(val);
            toggleErr(false);
            changeVal('');
        } else {
            toggleErr(true);
        }
    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <input data-testid="form-input" placeholder={'enter todo'} className="addForm-input" type="text" name="newItem" value={val} onChange={evt => changeVal(evt.target.value)}/>
                <button className="submit-btn">Add</button>
            </form>
            {err && <p>Cannot Be Blank</p>}
        </div>
    )
}

export default Form;