(function (root, factory) {
	// Building component according to modularization strategy

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['react'], factory);
	} else if (typeof exports === 'object') {
		// Node. Note that this does not work with strict
		// CommonJS, but only CommonJS-like environments
		// that support module.exports
		module.exports = factory(require('react'));
	} else {
		// Browser globals (root is window)
		root.ToggleDisplay = factory(React);
	}

}(this, function (React) {
	"use strict";

	function isDefined(val) {
		return val != null;
	}

	function shouldHide(props) {
		let shouldHide;
		if(isDefined(props.show)) {
			shouldHide = !props.show;
		}
		else if(isDefined(props.hide)) {
			shouldHide = props.hide;
		}
		else {
			shouldHide = false;
		}
		return shouldHide;
	}

	function ToggleDisplay(props) {
		if(props.if === false) {
			return <noscript></noscript>;
			// return null // this used to work, now have to manually return <noscript>
		}

		let style = {};
		if(shouldHide(props)) {
			style.display = 'none';
		}
		return (
			<span style={style} {...props} />
		);
	}

	ToggleDisplay.propTypes = {
		hide: React.PropTypes.bool,
		show: React.PropTypes.bool,
		if: React.PropTypes.bool
	};

	return ToggleDisplay;
}));
