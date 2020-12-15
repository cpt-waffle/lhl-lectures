import styled from 'styled-components';
import {useContext} from 'react';
import GlobalContext from '../context/GlobalContext';

const MemeImg = styled.img`
    margin: 5px;
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
    background-color: black;
    display: flex;
`

export default function Memes(props) {
    // if this was an API Call...
    const [state, setState] = useContext(GlobalContext);
    const ramseyMemes = [
        {k: 1, url: 'https://s3.scoopwhoop.com/anj/ramsayy/786144611.jpg'},
        {k: 2, url: 'https://images3.memedroid.com/images/UPLOADED473/5cb9b586d62bd.jpeg'},
        {k: 3, url: 'https://images.baklol.com/The-Uncooked-Chicken0672925011499429947.jpg'},
        {k: 4, url: 'https://i.ytimg.com/vi/XZjdtVYqSzQ/maxresdefault.jpg'},
        {k: 5, url: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/Gordon-Ramsay-Its-Raw.jpg'},
        {k: 6, url: 'https://pm1.narvii.com/6413/72b6710920c87d53c0d8f4788b6a219088a77f4b_00.jpg'},
      ]
    

    return (
        <div>
            <h1>{state.count2}</h1>
            <button onClick={() => setState(prev => ({...prev, count2: prev.count2+1}))}>Add One</button>
            
            {ramseyMemes.map(meme => <MemeImg width={'20em'} height={'450px'}key={meme.k} src={meme.url}/>)}
        </div>
    )
}