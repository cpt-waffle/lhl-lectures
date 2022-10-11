import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const handleSubmit = evt => {
        evt.preventDefault();
        if (val.length) {
            return props.addItem(val);
        }
    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <input
                    data-testid="input"
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