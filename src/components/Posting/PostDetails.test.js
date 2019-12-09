import React from "react";
import { PostDetails } from "./PostDetails.js";
import { shallow } from "enzyme";

describe("<PostDetails />", () => {
  it("it renders an edit button", () => {
    const props = { match: { params:{id:1} } };
    const wrapper = shallow(<PostDetails {...props} />);
    const editButton = wrapper.find(".")

    // const title = wrapper.find(".post-title");
    // expect(title.contains("fun")).toEqual(true);
  });
});
