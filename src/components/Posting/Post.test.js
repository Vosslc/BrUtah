import React from "react";
import { Post } from "./Post";
import { shallow } from "enzyme";

describe("<Post />", () => {
  it("it renders a title", () => {
    const props = { el: { post_id: 1, title: "fun", content: "this is fun" } };
    const wrapper = shallow(<Post {...props} />);
    const title = wrapper.find(".post-title");

    expect(title.contains("fun")).toEqual(true);
  });

  it("it renders content", () => {
    const props = { el: { post_id: 1, title: "fun", content: "this is fun" } };
    const wrapper = shallow(<Post {...props} />);
    const content = wrapper.find(".postText");

    expect(content.contains("this is fun")).toEqual(true);
  });
});
