import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import ToggleDisplay from '../ToggleDisplay.jsx';

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

	let hasP = $('p').length > 0;
	let hasSpan = $('span').length > 0;
	t.equal(false, hasP, 'should not be a <p>');
	t.equal(false, hasSpan, 'should not be a <span>');
	t.end();
});

test('ToggleDisplay should render with the specified tag name with <span> as the default', t => {
	let el =
	<ToggleDisplay show={true} tag='aside'>
		<p>test</p>
	</ToggleDisplay>;

	let el2 =
	<ToggleDisplay show={true}>
		<p>test</p>
	</ToggleDisplay>;

	let $ = dom.load(render(el));
	let $2 = dom.load(render(el2));

	let hasAside = $('aside').length > 0;
	let noAside = $2('aside').length > 0;
	let hasSpan = $2('span').length > 0;

	t.equal(true, hasAside, 'should be an <aside>');
	t.equal(false, noAside, 'should not have an <aside>');
	t.equal(true, hasSpan, 'should have a <span>');

	t.end();
});
