import { useState } from "react";

/// state arrays, and objects


const AddWord = () => {
  const [words, setWords] = useState('Hello');

  const addWord = () => {
    setWords(words + 'hello');
  }

  return (
    <div>
      <button onClick={addWord}>Add Hello!</button>
      <h1>{words}</h1>
    </div>
  )
}

export default AddWord;