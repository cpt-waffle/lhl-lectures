import React from 'react';
import useForm from '../hooks/useForm'


function InfoForm() {
    const {information, onChangeInfo} = useForm();
    return (
        <div>
            <p>
                NEW INFORMATION:
                <input
                    type="text"
                    value={information}
                    onChange={onChangeInfo}
                />
            </p>
        </div>
    )


}

export default InfoForm;