import React, {Component} from 'react';

export default class Meme extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "Vasiliy", count:0 };
    }

    printHello = () => {
        console.log('hello world');
    }

    render() {
        console.log(this.props)
        return (
            <div>
                  <h1>{this.state.name}</h1>
                 <h4>count: {this.state.count}</h4>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Hello World!</button>
            </div>
        )
    }

}