import React, {Component} from 'react';

class Hello extends Component {

    helloText = 'hello was mounted';

    render() {
        return (
            <h2 className={'title'}>React {this.helloText}</h2>
        );
    }
}

export default Hello;