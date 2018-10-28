import React, { Component } from 'react';

class App extends Component {
    state = { name: '' };

    handleChangeName = ({ target }) => {
        const { value } = target;

        this.setState({ name: value });
    };


    render() {
        const { name } = this.state;

        return (
            <div>
                <input id='name' type='text' value={name ? name : 'guest'} onChange={this.handleChangeName} />
                <p>Hello, {name ? name :  'guest' }</p>
                <p>{this.justText}</p>
            </div>
        );
    }
}

export default App;