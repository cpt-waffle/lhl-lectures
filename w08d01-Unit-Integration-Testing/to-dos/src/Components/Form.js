import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [err, setErr] = useState(false);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (val) {
            props.addItem(val);
            if (err) {
                setErr(false);
            }
        } else {
            setErr(true);
        }
    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
        
                <input
                    data-testid="form-input"
                    placeholder={'enter todo'}
                    className="addForm-input"
                    type="text"
                    name="newItem"
                    value={val}
                    onChange={evt => changeVal(evt.target.value)}
                />
                <button className="submit-btn">Add</button>
            </form>
            {err && <h2>Cannot be Blank!</h2>}
        </div>
    )
}

export default Form;