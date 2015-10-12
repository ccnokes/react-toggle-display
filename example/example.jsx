import React from 'react';
import ReactDOM from 'react-dom';
import ToggleDisplay from '../index.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true
        };
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                <ToggleDisplay show={this.state.show}>
                    Hello?
                </ToggleDisplay>
                <ToggleDisplay if={this.state.show}>
                    <br/>Is it me you're looking for?
                </ToggleDisplay>
                <ToggleDisplay hide={this.state.show}>
                    I can see it in your eyes, I can see it in your smile...
                </ToggleDisplay>
                <br/><br/>
                <button onClick={this.handleClick.bind(this)}>Toggle</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
