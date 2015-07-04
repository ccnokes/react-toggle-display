# react-toggle-display

A stateless react component that toggles the display of it's children. It's like `ng-show` or `ng-hide` but for react. 

[View demo](https://jsfiddle.net/ccnokes/oqttsu83/)

Example usage: 

```javascript
import ToggleDisplay from 'react-toggle-display';

export default React.createClass({
	
	getInitialState() {
		return {
			isAuthorized: false
		};
	}

	render() {
		return (
			<ToggleDisplay show={this.state.isAuthorized}>
				<p>Secret stuff for authorized people only.</p>
			</ToggleDisplay>
		);
	}

});

```