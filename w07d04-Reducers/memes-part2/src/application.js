// THIS IS OUR STATE FILE
import { useReducer } from 'react';

function reducer(prevState, action) {
  if (action.type === 'ADD_MEME') {
    console.log("HIT ADD_MEME");
    let tempNumberOfMemes = prevState.numberOfMemes + 1;
    let tempMemeList = [...prevState.memesList, action.value];
    return {
      ...prevState,
      numberOfMemes: tempNumberOfMemes,
      memesList: tempMemeList
    }
  } else if (action.type === 'REMOVE_MEME') {
    //....
    const tempMemeList = prevState.memesList.filter((meme, i) => action.value.id !== i);
    let tempNumberOfMemes = prevState.numberOfMemes - 1;
    return {
      ...prevState,
      numberOfMemes: tempNumberOfMemes,
      memesList: tempMemeList
    }
  }
}


// we pretend we useEffect and get this back-end server
// const initial = [
//   {url: 'https://preview.redd.it/tm8fge3gi2i41.jpg?width=640&crop=smart&auto=webp&s=9a0a3ec80dd4ed789517ccdddf2d8ce7c9a9d692'},
//   {url: 'https://preview.redd.it/twnnw22oi2i41.jpg?width=640&crop=smart&auto=webp&s=bf3c050c288435ccb50817e4e1b6f694670a1af8'},
//   {url: 'https://i.redd.it/0bcplv9l81i41.jpg'}
// ];

const initial = {
  numberOfMemes: 0,
  memesList: [],
  favoriteMeme: {}
}



export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer,initial);

  function addMeme(meme) {
      dispatch({type: 'ADD_MEME', value: {url: meme}});
  }


  function removeMeme(id) {
    dispatch({type: 'REMOVE_MEME', value: {id: id}});
  }





  return {state, addMeme, removeMeme};
}


