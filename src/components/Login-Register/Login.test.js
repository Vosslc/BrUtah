import React, { Component } from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { Login } from "./Login";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Login Component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 * @param {any} state - inital state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  return shallow(<Login {...props} />);
};
//! We will be using this fn below quite offten
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of the datd-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
//!END Comment

test("Renders without errors", () => {
  const wrapper = setup();
  const loginComponent = findByTestAttr(wrapper, "component-login");
  expect(loginComponent.length).toBe(1);
});

//! LOGIN
test("Renders login button", () => {
  const wrapper = setup();
  const loginButton = findByTestAttr(wrapper, "login-button");
  expect(loginButton.length).toBe(1);
});

//? LOGIN Password
test("login password input field is null", () => {
  const wrapper = setup();
  const initialPasswordState = wrapper.state("password");
  expect(initialPasswordState).toBe("");
});
//? END LOGIN Password 
//? LOGIN Button Click 
test("Clicking LOGIN button will take uo to LOGIN page", () => {});
//? END LOGIN Button Click 
//! END LOGIN
//! REGISTER
test("Renders Register button", () => {
  const wrapper = setup();
  const registerButton = findByTestAttr(wrapper, "register-button");
  expect(registerButton.length).toBe(1);
});

//! END REGISTER 
