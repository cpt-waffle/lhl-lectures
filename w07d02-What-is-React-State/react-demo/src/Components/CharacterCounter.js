import { useState } from "react";

const CharacterCounter = () => {

  const [charNum, setCharNum] = useState(140);

  const onInputChange = (evt) => {
    setCharNum(140 - evt.target.value.length);
  }

  return (
    <form>
      <input type="text" name="tweet" onChange={onInputChange}/>
      <span>{charNum}</span>
    </form>
  )
}

export default CharacterCounter;