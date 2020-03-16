import React, { Component } from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import {Login} from "./Login"

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
  * Factory function to create a ShallowWrapper for the Login Component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 * @param {any} state - inital state for setup.
 * @returns {ShallowWrapper}
   */

const setup = (props={}, state=null) => {
  return shallow(<Login {...props} />)
}

test('Renders without errors', () =>{
  const wrapper = setup();
  const loginComponent = wrapper.find("[data-test='component-login']")
  expect(loginComponent.length).toBe(1);
});

//! LOGIN 
test('Renders login button', () =>{
  const wrapper = setup();
  const loginButton = wrapper.find("[data-test='login-button']")
  expect(loginButton.length).toBe(1);
});

test('Clicking LOGIN button will take uo to LOGIN page', () =>{
 
});
//! LOGIN END

//! REGISTER  
test('Renders Register button', () =>{
  const wrapper = setup();
  const registerButton = wrapper.find("[data-test='register-button']")
  expect(registerButton.length).toBe(1);
});
 
test('Clicking Register button will take uo to Reg page', () =>{

});
//! REGISTER END