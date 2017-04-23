# react-toggle-display

[![Build Status](https://travis-ci.org/ccnokes/react-toggle-display.svg?branch=master)](https://travis-ci.org/ccnokes/react-toggle-display)

A stateless react component that toggles the display of it's children. It's like `ng-show`, `ng-hide` or `ng-if` but for react.

This allows you to DRY up statements like this:

```javascript
<div className={this.props.shouldHide ? 'hidden' : ''}>
```

Example usage:

```javascript
import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class App extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <button onClick={ () => this.handleClick() }>Toggle things</button>
        </p>
        <ToggleDisplay show={this.state.show}>
          I am rendered in a span (by default) and hidden with display:none when show is false.
        </ToggleDisplay>

        <ToggleDisplay if={this.state.show} tag="section">
          I am rendered in a section and removed from the DOM when if is false.
        </ToggleDisplay>
      </div>
    );
  }
}

export default App;

```
[View demo](https://jsfiddle.net/ccnokes/oqttsu83/)


## Props

`hide` - boolean

`show` - boolean

`if` - boolean

`tag` - string. The tag name to use as the ToggleDisplay element. Defaults to span.

The two first props are simply the inverse of each other. Using both at the same time will result in canceling each other out.


## Install

```
npm install react-toggle-display
```

## Tests

To run tests: `npm test`



## Contributors

Big thanks to [willgm](https://github.com/willgm) for his contributions.


## Change Notes

Note that if you are using a version under 0.1.1, you will have to compile react-toggle-display's JSX yourself. I recommend just updating to 1.x so you don't have to worry about that. No breaking API changes in 1.x.

While v2 does not change anything functionally, it was refactored to be a ["stateless functional component"](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components), which won't work in React versions less than 0.14.

v2.2 adds the `prop-types` package to get rid of some warnings when using React 15.5

