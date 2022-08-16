import React, { useState } from 'react';


function Form(props) {
    const [val, changeVal] = useState('');
    const handleSubmit = evt => {
        evt.preventDefault();
        if (!val) {
            return
        }
        props.addItem(val);
        changeVal('');

    }

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <input placeholder={'enter todo'} data-testid="item-add" className="addForm-input" type="text" name="newItem" value={val} onChange={evt => changeVal(evt.target.value)}/>
                <button className="submit-btn" data-testid="add-btn">Add</button>
            </form>
        </div>
    )
}

export default Form;