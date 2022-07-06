jest.useFakeTimers();
import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";

import Home from "../routes/Home";

describe("<Home />", () => {

  it("match snapshot", () => {
      const snap = renderer.create(<Home />).toJSON()
      expect(snap).toMatchSnapshot()
  })


  it("renders", () => {
    const { getByText, getByTestId } = render(<Home />);

    getByText('Hello');

    expect(getByTestId('text').props.children).toBe("Hello")

    fireEvent.press(getByTestId("press"))

    expect(getByTestId('text').props.children).toBe("Bye")
  });
  it("has 3 child", () => {
    const tree = renderer.create(<Home />).toJSON();
    console.log(tree);
    expect(tree.children.length).toBe(3);
  });
});