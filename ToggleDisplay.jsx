import React from 'react';

function isDefined(val) {
	return val != null;
}

function shouldHide(props) {
	if(isDefined(props.show)) {
		return !props.show;
	}
	else if(isDefined(props.hide)) {
		return props.hide;
	}
	return false;
}

export default function ToggleDisplay(props) {
	if(props.if === false) {
		return <noscript></noscript>;
		// return null // this used to work, now have to manually return <noscript>
	}

	let style = {};
	if(shouldHide(props)) {
		style.display = 'none';
	}

	const Tag = props.tag;
	return (
		<Tag style={style} {...props} />
	);
}

ToggleDisplay.propTypes = {
	tag: React.PropTypes.string,
	hide: React.PropTypes.bool,
	show: React.PropTypes.bool,
	if: React.PropTypes.bool
};

ToggleDisplay.defaultProps = {
	tag: 'span'
};
