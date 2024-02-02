import { expect, test, describe } from 'vitest';
import NavigationComponent from "../../src/routes/navigation/navigation.component.jsx";
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';

const setUpWrapper = () => {
  return renderer.create(
    <BrowserRouter>
      <NavigationComponent />
    </BrowserRouter>
  );
}

describe('navigation component includes components', () => {
  const component = setUpWrapper().toJSON();

  test('navigation component has sign-in', () => {
    expect(component.children[1].children[1].children.toString()).toBe('SIGN IN');
  });

  test('navigation component has shop', () => {
    expect(component.children[1].children[0].children.toString()).toBe('SHOP');
  });

  test('navigation component has logo', () => {
    expect(component.children[0].children[0].props.className).toBe('logo');
  });
});

describe("navigation component's links work", () => {
  const component = setUpWrapper();

  test('logo click goes to home', () => {

  });
});