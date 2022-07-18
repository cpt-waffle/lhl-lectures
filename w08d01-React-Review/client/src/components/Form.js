import { useState } from "react";

const Form = props => {
  const [url, setURL] = useState('');
  const [title, setTitle] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("URL", url);
    console.log("TITLE", title);
    props.onSubmit(url, title);

  }

  return (<div>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="url" value={url} onChange={(evt) => setURL(evt.target.value)}/>
      <input type="text" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)}/>
      <button>Add a new meme!!</button>
    </form>
  </div>)
}

export default Form;