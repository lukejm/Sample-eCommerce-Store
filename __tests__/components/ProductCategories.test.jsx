import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import ProductCategories from "../../src/components/productCategories/ProductCategories.jsx";
import * as MockData from "../../__mocks__/MockData.js";

// const keysUnfiltered = MockData.categories;
const keys = MockData.categories.map(el => el.replace("'", ""));
const wrapper = renderer.create(<ProductCategories categories={keys}/>);

test('component has 4 categories when supposed to have 4 categories', () => {
  let tree = wrapper.toJSON();
  expect(tree.children.length).toBe(4);
});

test('Negated: component has 4 categories when supposed to have 4 categories', () => {
  let tree = wrapper.toJSON();
  expect(tree.children.length).not.toBe(5);
});

test('React Component contains all given categories', () => {
  let tree = wrapper.toJSON();
  let treeArray = tree.children;
  let data = keys;
  let filtered = [];
  treeArray.forEach(treeEl => {
    if (!data.includes(treeEl.children[0].children.toString())) {
      filtered.push(treeEl.children[0].children.toString());
    }
  });
  expect(filtered.length === 0).toBe(true);
});

test('Negated: React Component contains all given categories', () => {
  let tree = wrapper.toJSON();
  let treeArray = tree.children;
  let data = keys;
  data.pop();
  let filtered = [];
  treeArray.forEach(treeEl => {
    if (!data.includes(treeEl.children[0].children.toString())) {
      filtered.push(treeEl.children[0].children.toString())
    }
  });
  expect(filtered.length === 1).toBe(true);
});

test('snapshot test', () => {
  expect(wrapper).toMatchSnapshot();
});

test('make sure testing is working', () => {
  expect(true).toBe(true);
});