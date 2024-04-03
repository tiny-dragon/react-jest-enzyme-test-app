import React from 'react';
import renderer from 'react-test-renderer';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<NameForm />);
    /*
    Create a TestRenderer instance with the passed React element.
    It doesn’t use the real DOM, but it still fully renders the component tree into memory so you can make assertions about it.
    The returned instance has the following methods and properties.
    */
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
