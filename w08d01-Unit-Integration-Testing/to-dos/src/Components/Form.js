import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (val !== '') {
            setError(false);
            return props.addItem(val);
        } else {
            setError(true);
        }
    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                {error && <h4>Item cannot be Blank</h4>}
                <input
                    data-testid="form-input"
                    placeholder={'enter todo'}
                    className="addForm-input"
                    type="text"
                    name="newItem"
                    value={val}
                    onChange={evt => changeVal(evt.target.value)}
                />
                <button data-testid="form-button" className="submit-btn" >Add</button>
            </form>
        </div>
    )
}

export default Form;