import { expect, test, describe } from 'vitest';
import renderer from 'react-test-renderer';
import HomeComponent from "../../src/routes/home/home.component.jsx";
import {categories} from '../../__mocks__/MockData.js'



const wrapper = () => {
  return renderer.create(<HomeComponent categories={categories}/>)
};

describe('home component has proper elements', () => {
  const component = wrapper().toJSON();

  test('has right number of components', () => {
    expect(component.children.length).toBe(5);
  });

  test('negated: has right number of components', () => {
    const cats = categories;
    cats.pop();
    const comp = renderer.create(<HomeComponent categories={cats} />).toJSON();
    expect(comp.children.length).toBe(4);
  });
});

