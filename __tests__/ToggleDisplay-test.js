import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import ToggleDisplay from '../index.jsx';

const render = reactDom.renderToStaticMarkup;

test('ToggleDisplay', t => {
	let el =
	<ToggleDisplay show={true}>
		<p>test</p>
	</ToggleDisplay>;
	let $ = dom.load(render(el));

	let hasP = $('p').length > 0;
	t.equal(true, hasP, 'should be a <p> in the DOM');
	t.end();
});

test('ToggleDisplay should hide it\'s children', t => {
	let el =
	<ToggleDisplay show={false}>
		<p>test</p>
	</ToggleDisplay>;
	let $ = dom.load(render(el));


	let isHidden = $('span').css('display') === 'none';
	t.equal(true, isHidden, 'should be a display:none prop on the <span>');
	t.end();
});

test('ToggleDisplay should conditionally render it\'s children (true)', t => {
	let el =
	<ToggleDisplay if={true}>
		<p>test</p>
	</ToggleDisplay>;
	let $ = dom.load(render(el));

	let isInDOM = $.html().length > 0;
	t.equal(true, isInDOM, 'should exist in DOM');
	t.end();
});

test('ToggleDisplay should conditionally render it\'s children (false)', t => {
	let el =
	<ToggleDisplay if={false}>
		<p>test</p>
	</ToggleDisplay>;
	let $ = dom.load(render(el));

	let hasNoScript = $('noscript').length > 0;
	let hasP = $('p').length > 0;
	t.equal(true, hasNoScript, 'should be a <noscript>');
	t.equal(false, hasP, 'should not be a <p>');
	t.end();
});
