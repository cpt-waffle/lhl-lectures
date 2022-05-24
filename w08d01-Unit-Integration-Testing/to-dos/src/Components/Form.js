import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const [err, setError] = useState(false);
    const handleSubmit = evt => {
        evt.preventDefault();
        if (!val) {
            setError(true);
            return;
        }
        props.addItem(val);
        changeVal('');

    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <input data-testid="form-input" placeholder={'enter todo'} className="addForm-input" type="text" name="newItem" value={val} onChange={evt => changeVal(evt.target.value)}/>
                <button className="submit-btn">Add</button>
                {err && <h2>Cannot Be Blank</h2>}
            </form>
        </div>
    )
}

export default Form;