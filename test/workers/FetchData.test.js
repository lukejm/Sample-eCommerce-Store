import FetchData from "../../src/workers/FetchData.js";
import "@testing-library/jest-dom";
import {categories} from "./MockData.js";


test('sample category data size correct size', () => {
  return new FetchData().getCategories(categories).then(data => {
    expect(data.length).toBe(4);
  });
});

test('sample category data size correct size given wrong size', () => {
  return new FetchData().getCategories(categories).then(data => {
    expect(data.length).not.toBe(5);

  });
});
