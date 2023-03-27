import React, {useState} from 'react';



const Form = props => {
  const [item, setItem] = useState('');

  const formFunction = (evt) => {
    evt.preventDefault();
    console.log("item", item);
    props.addItem(item);
  }

  return (<form onSubmit={formFunction}>
    <input type="string" name="item" onChange={evt => setItem(evt.target.value)} value={item}/>
    <button>add!</button>
  </form>)
}

export default Form;