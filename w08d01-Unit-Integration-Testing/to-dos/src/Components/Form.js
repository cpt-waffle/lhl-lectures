import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = evt => {
        evt.preventDefault();
        if (val.length !== 0) {
            props.addItem(val);
            changeVal('');
            setError(false);

        } else {
            setError(true);
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
                <button data-testid="form-button" className="submit-btn" >Add</button>
                {error && <h2>Task Cannot be Blank!!</h2>}
            </form>
        </div>
    )
}

export default Form;