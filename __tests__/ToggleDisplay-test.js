jest.dontMock('../index.jsx');

var React = require('react/addons');
var ToggleDisplay = require('../index.jsx');
var TestUtils = React.addons.TestUtils;

describe('ToggleDisplay', function() {
	
	it('should show it\'s children', function() {
		//render component into doc
		var tdShow = TestUtils.renderIntoDocument(
			<ToggleDisplay show={true}>
				<p>test</p>
			</ToggleDisplay>
		);

		var tdHide = TestUtils.renderIntoDocument(
			<ToggleDisplay hide={false}>
				<p>test</p>
			</ToggleDisplay>
		);
		
		//get root element
		var tdShowRoot = TestUtils.findRenderedDOMComponentWithTag(tdShow, 'span');
		var tdHideRoot = TestUtils.findRenderedDOMComponentWithTag(tdHide, 'span');

		//make sure the unit test is working
		expect( TestUtils.isCompositeComponent(tdShow) ).toBe(true);

		expect(tdShowRoot.props.show).toEqual(true);
		expect(tdShowRoot.props.style).toEqual({});

		expect(tdHideRoot.props.hide).toEqual(false);
		expect(tdHideRoot.props.style).toEqual({});
	});

	//just the inverse of above
	it('should hide it\'s children', function() {
		var tdShow = TestUtils.renderIntoDocument(
			<ToggleDisplay show={false}>
				<p>test</p>
			</ToggleDisplay>
		);

		var tdHide = TestUtils.renderIntoDocument(
			<ToggleDisplay hide={true}>
				<p>test</p>
			</ToggleDisplay>
		);
		
		var tdShowRoot = TestUtils.findRenderedDOMComponentWithTag(tdShow, 'span');
		var tdHideRoot = TestUtils.findRenderedDOMComponentWithTag(tdHide, 'span');


		expect(tdShowRoot.props.show).toEqual(false);
		expect(tdShowRoot.props.style).toEqual({display:'none'});

		expect(tdHideRoot.props.hide).toEqual(true);
		expect(tdHideRoot.props.style).toEqual({display:'none'});
	});

	it('should load it\'s children as configured', function() {
		var tdShow = TestUtils.renderIntoDocument(
			<ToggleDisplay if={true}>
				<p>test</p>
			</ToggleDisplay>
		);

		var tdHide = TestUtils.renderIntoDocument(
			<ToggleDisplay if={false}>
				<p>test</p>
			</ToggleDisplay>
		);

		var tdShowRoot = TestUtils.findRenderedDOMComponentWithTag(tdShow, 'span');
		var tdHideRoot = TestUtils.findRenderedDOMComponentWithTag(tdHide, 'span');

		expect(tdShowRoot.props.if).toEqual(true);
		expect(tdShowRoot.props.style).toEqual({});

		expect(tdHideRoot.props).toEqual({});
	});
	
});