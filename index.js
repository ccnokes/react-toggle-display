var React = require('react');

function isDefined(val) { 
	return val != null; 
}

module.exports = React.createClass({
	
	propTypes: {
		hide: React.PropTypes.bool,
		show: React.PropTypes.bool
	},

	render: function() {
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
        
		var style = {};
		
		if(shouldHide) {
			style = {
				display: 'none !important'
			};
		}

		//the key attr ensures that the DOM is updated on props change
		//not sure why style attr changes don't trigger a DOM update, see:
		//http://stackoverflow.com/questions/28976460/react-js-how-to-make-inline-styles-automatically-update-progress-bar-on-state-c
		return (
			<span key={shouldHide} style={style} {...this.props} />
		);
	}


});