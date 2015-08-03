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

	return React.createClass({
		
		propTypes: {
			hide: React.PropTypes.bool,
			show: React.PropTypes.bool,
			if: React.PropTypes.bool
		},

		shouldHide: function() {
			var shouldHide;
			if(isDefined(this.props.show)) {
				shouldHide = !this.props.show;
			}
			else if(isDefined(this.props.hide)) {
				shouldHide = this.props.hide;
			}
			else {
				shouldHide = false;
			}

			return shouldHide;
		},

		render: function() {

			if(this.props.if === false)
				return <span />;

			var style = {};

			if(this.shouldHide()) {
				style.display = 'none';
			}

			return (
				<span style={style} {...this.props} />
			);
		}

	});

}));
