import React from "react";
import { shallow } from "enzyme";
import Pokecard2 from "./Pokecard2";

describe("Pokecard2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokecard2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
