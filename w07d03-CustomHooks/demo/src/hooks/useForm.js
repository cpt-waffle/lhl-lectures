import {useState, useEffect} from 'react';

const useForm = function(name, password) {
    console.log("LINE 4 USEFORM.js")
    const [nickname, setNickname] = useState(name || '');
    const [pass, setPass] = useState(password || '');

    useEffect(() => {
        setTimeout(() => {
            setNickname('applesauce')
        }, 3000)
    }, []) 


    const onNickChange = (evt) => {
        setNickname(evt.target.value)
    }

    const onPassChange = (evt) => {
        setPass(evt.target.value)
    }

    return {nickname, pass, onNickChange, onPassChange}
}

export default useForm;