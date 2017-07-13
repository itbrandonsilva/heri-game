import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';

export class MainComponent extends Component<any, any>{
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

let appElement = document.getElementById('app');
ReactDOM.render(<MainComponent/>, appElement);