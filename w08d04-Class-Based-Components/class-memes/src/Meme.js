import React from 'react';

class Meme extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this)
        return (
            <div>
                <img src={this.props.url}/>
            </div>
        )
    }
}

export default Meme;