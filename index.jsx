var React = require('react');

function isDefined(val) { 
	return val != null; 
}

module.exports = React.createClass({
	
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