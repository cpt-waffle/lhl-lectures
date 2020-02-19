import React from 'react'
import useMemeState from './useMemeState';

export default function GoodMemeList(props) {
  // export all my functions
  const { memes, handleAddMeme, deleteMeme } = useMemeState(props.api);

  return (
    <div>
      <ul>
        {memes.map( (meme, index) => <img key={index} onClick={ () => deleteMeme(index) }style={{width: '250px'}}src={meme.url}/>)}
      </ul>
      <form onSubmit={handleAddMeme}>
        <p>URL<input type="text" name="url"/></p>
        <p>Title<input type="text" name="title"/></p>
        <button>Submit!!!!</button>
      </form>
    </div>
  )
}