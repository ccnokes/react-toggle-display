# react-toggle-display

[![Build Status](https://travis-ci.org/ccnokes/react-toggle-display.svg?branch=master)](https://travis-ci.org/ccnokes/react-toggle-display)

A stateless react component that toggles the display of it's children. It's like `ng-show` or `ng-hide` but for react. 

This allows you to DRY up statements liks this:

```javascript
<div className={this.props.shouldHide ? 'hidden' : ''}>
```

[View demo](https://jsfiddle.net/ccnokes/oqttsu83/)

Example usage: 

```javascript
import ToggleDisplay from 'react-toggle-display';

export default React.createClass({
	
	getInitialState() {
		return {
			isAuthorized: false
		};
	},

	render() {
		return (
			<ToggleDisplay show={this.state.isAuthorized}>
				<p>Secret stuff for authorized people only.</p>
			</ToggleDisplay>
		);
	}

});

```
The component supports the `hide` or `show` props and expects a boolean for both.


## Install

```
npm install react-toggle-display
```

## Tests

To run tests: 

```
npm test
```

Note that tests have to be run on node version 0.10. See [https://github.com/facebook/jest/issues/243](https://github.com/facebook/jest/issues/243) for why.
