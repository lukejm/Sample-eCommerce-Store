import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import CategoryItemComponent from "../../src/components/shop-category/category-item.component.jsx";
import {categories} from "../../__mocks__/MockData.js";
import DirectoryComponent from "../../src/components/directory/directory.component.jsx";



const setUpWrapper = () => {
  let container = [];
  categories.forEach(({id, imageUrl, title}) => {
    container.push(renderer.create(<CategoryItemComponent key={id} imageUrl={imageUrl} title={title} />).toJSON())
  });
  return container;
}

test('component has 5 categories when supposed to have 5 categories', () => {
  let tree = setUpWrapper();
  expect(tree.length).toBe(5);
});

test('Negated: component has 5 categories when supposed to have 5 categories', () => {
  let tree = setUpWrapper();
  expect(tree.length).not.toBe(4);
});

test('category item has right title', () => {
  const {id, imageUrl, title} = categories[0];
  const wrapper =  renderer.create(<CategoryItemComponent key={id} imageUrl={imageUrl} title={title} />);
  const tree = wrapper.toJSON();
  const treeTitle = tree.children[1].children[0].children[0];
  expect(treeTitle).toBe(title);
});

test('category item has right body', () => {
  const {id, imageUrl, title} = categories[0];
  const wrapper =  renderer.create(<CategoryItemComponent key={id} imageUrl={imageUrl} title={title} />);
  const tree = wrapper.toJSON();
  const treeTitle = tree.children[1].children[1].children[0];
  expect(treeTitle).toBe("Shop Now");
});

test('snapshot test electronics category url correct', () => {
  const {id, imageUrl, title} = categories[0];
  const wrapper =  renderer.create(<CategoryItemComponent key={id} imageUrl={imageUrl} title={title} />);
  const tree = wrapper.toJSON();
  const bgImageString = tree.children[0].props.style.backgroundImage;
  expect(bgImageString).toContain(imageUrl);
});

test('snapshot test directory', () => {
  const wrapper = renderer.create(<DirectoryComponent categories={categories}/>);
  expect(wrapper).toMatchSnapshot();
});

// test('Negated: React Component contains all given categories', () => {
//   let tree = wrapper.toJSON();
//   let treeArray = tree.children;
//   let data = simpleCategories;
//   data.pop();
//   let filtered = [];
//   treeArray.forEach(treeEl => {
//     if (!data.includes(treeEl.children[1].children[0].children.toString())) {
//       filtered.push(treeEl.children[1].children[0].children.toString())
//     }
//   });
//   expect(filtered.length === 1).toBe(true);
// });
//
// test('React Component contains all given categories', () => {
//   let tree = wrapper.toJSON();
//   let treeArray = tree.children;
//   let data = simpleCategories;
//   // console.log(treeArray[0].children[0]);
//
//   let filtered = [];
//   treeArray.forEach(treeEl => {
//     if (!data.includes(treeEl.children[1].children[0].children.toString())) {
//       filtered.push(treeEl.children[1].children[0].children.toString());
//     }
//   });
//   expect(filtered.length === 0).toBe(true);
// });
//
// test('verify testing is working', () => {
//   expect(true).toBe(true);
// });