# react-toggle-display

[![Build Status](https://travis-ci.org/ccnokes/react-toggle-display.svg?branch=master)](https://travis-ci.org/ccnokes/react-toggle-display)

A stateless react component that toggles the display of it's children. It's like `ng-show`, `ng-hide` or `ng-if` but for react. 

This allows you to DRY up statements liks this:

```javascript
<div className={this.props.shouldHide ? 'hidden' : ''}>
```

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
[View demo](https://jsfiddle.net/ccnokes/oqttsu83/)

Note that if you are using a version under 0.1.1, you will have to compile react-toggle-display's JSX yourself. I recommend just updating to 1.x so you don't have to wory about that. No breaking API changes in 1.x.

## Props

`hide` - boolean

`show` - boolean

`if` - boolean

The two first props are simply the inverse of each other. Using both at the same time will result in canceling each other out.


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


## Contributors

Big thanks to [willgm](https://github.com/willgm) for his contributions. 


