var React = require('react');

module.exports = React.createClass({

	propTypes: {
		show: React.PropTypes.bool.isRequired
	},

	render: function() {
		
		var style = {};
		
		if(!this.props.show) {
			style = {
				display: 'none !important'
			};
		}

		return (
			<span style={style} {...this.props} />
		);
	}

});