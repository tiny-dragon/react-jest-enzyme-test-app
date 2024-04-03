import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', ()=>{
  let component = null;

  it('renders correctly', ()=>{
    component = renderer.create(<Counter />);
  });

  it('matches snapshot', ()=>{
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    /*
    console.log(tree);
    { type: 'div',
      props: {},
      children:
        [
          { type: 'h1', props: {}, children: [Array] },
          { type: 'h2', props: {}, children: [Array] },
          { type: 'button', props: [Object], children: [Array] },
          { type: 'button', props: [Object], children: [Array] } 
        ] 
    }
    */
  });

  it('increases correctly', ()=>{
    component.getInstance().onIncrease();
    expect(component.getInstance().state.value).toBe(2);
    const tree = component.toJSON(); // re-render
    expect(tree).toMatchSnapshot(); // comparision
  });

  it('decreases correctly', ()=>{
    component.getInstance().onDecrease();
    expect(component.getInstance().state.value).toBe(1);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});