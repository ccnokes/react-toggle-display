import React from 'react';
import PropTypes from 'prop-types';

ToggleDisplay.propTypes = {
	tag: PropTypes.string,
	hide: PropTypes.bool,
	show: PropTypes.bool,
	if: PropTypes.bool
};

ToggleDisplay.defaultProps = {
	tag: 'span'
};

const propsToRemove = Object.keys(ToggleDisplay.propTypes);

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

function pickProps(props) {
	const newProps = Object.assign({}, props);
	propsToRemove.forEach(prop => {
		if(prop in newProps) {
			delete newProps[prop];
		}
	});
	return newProps;
}

export default function ToggleDisplay(props) {
	if(props.if === false) {
		return null;
	}

	let style = {};
	if(shouldHide(props)) {
		style.display = 'none';
	}

	const Tag = props.tag;
	// prevent our props from being leaked down onto the children
	const newProps = pickProps(props);

	return (
		<Tag style={style} {...newProps} />
	);
}
