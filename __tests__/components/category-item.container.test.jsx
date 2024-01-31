import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import CategoryItemComponent from "../../src/components/productCategories/category-item.component.jsx";
import {categories, simpleCategories} from "../../__mocks__/MockData.js";

const wrapper = renderer.create(<CategoryItemComponent categories={categories}/>);


// test ('refactoring temp', () => {
//   console.log(wrapper.toJSON());
// });

test('component has 4 categories when supposed to have 4 categories', () => {
  let tree = wrapper.toJSON();
  expect(tree.children.length).toBe(5);
});

test('Negated: component has 4 categories when supposed to have 4 categories', () => {
  let tree = wrapper.toJSON();
  expect(tree.children.length).not.toBe(4);
});

test('React Component contains all given categories', () => {
  let tree = wrapper.toJSON();
  let treeArray = tree.children;
  let data = simpleCategories;
  console.log(simpleCategories);
  let filtered = [];
  treeArray.forEach(treeEl => {
    if (!data.includes(treeEl.children[0].children[0].children.toString())) {
      filtered.push(treeEl.children[0].children[0].children.toString());
    }
  });
  expect(filtered.length === 0).toBe(true);
});

test('Negated: React Component contains all given categories', () => {
  let tree = wrapper.toJSON();
  let treeArray = tree.children;
  let data = simpleCategories;
  data.pop();
  let filtered = [];
  treeArray.forEach(treeEl => {
    if (!data.includes(treeEl.children[0].children[0].children.toString())) {
      filtered.push(treeEl.children[0].children[0].children.toString())
    }
  });
  expect(filtered.length === 1).toBe(true);
});

test('snapshot test', () => {
  expect(wrapper).toMatchSnapshot();
});

test('verify testing is working', () => {
  expect(true).toBe(true);
});