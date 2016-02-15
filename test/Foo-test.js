import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", function() {
    expect(render(<Foo />).find('.foo').length).toBe(1);
  });
});
