import { useState } from 'react';

const CharacterCounter = () => {

  const [charNumber, setCharacterNum] = useState(140);

  const onInput = (evt) => {
    console.log('works');
    console.log(evt.target.value.length);
    setCharacterNum(140 - evt.target.value.length);
  }


  return (
    <form>
      <input type="text" name="tweet" onChange={onInput}/>
      <span>{charNumber}</span>
    </form>
  )
}

export default CharacterCounter;