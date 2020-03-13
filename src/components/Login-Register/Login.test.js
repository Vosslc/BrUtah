import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import {Login} from "./Login"

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Renders without errors', () =>{
  const wrapper = shallow(<Login />)
  const loginComponent = wrapper.find("[data-test='component-login']")
  expect(loginComponent.length).toBe(1);
});

//! LOGIN 
test('Renders login button', () =>{
  const wrapper = shallow(<Login />)
  const loginButton = wrapper.find("[data-test='login-button']")
  expect(loginButton.length).toBe(1);
});

test('Clicking LOGIN button will take uo to LOGIN page', () =>{
 
});
//! LOGIN END

//! REGISTER  
test('Renders Register button', () =>{
  const wrapper = shallow(<Login />)
  const registerButton = wrapper.find("[data-test='register-button']")
  expect(registerButton.length).toBe(1);
});
 
test('Clicking Register button will take uo to Reg page', () =>{

});
//! REGISTER END