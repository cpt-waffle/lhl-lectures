import { useState, useEffect } from 'react';

export default function useMemeState(api) {
  console.log(api);
  //create state
  const [memes, addMeme] = useState([]);
  console.log(api);

  useEffect(() => {
    addMeme(api)
  }, [])

  //create function
  const handleAddMeme = evt => {
    evt.preventDefault();
    addMeme([...memes, {url: evt.target.url.value, title: evt.target.title.value}])
  }
  //create another function
  const deleteMeme = index => {
    addMeme( memes.filter((meme, i) => i !== index));
  }

  // Export
  return {memes, handleAddMeme, deleteMeme };
}