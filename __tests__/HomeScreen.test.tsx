// __tests__/HomeScreen.test.tsx
import * as React from "react";
import * as renderer from "react-test-renderer";
import HomeScreen from "../src/screens/HomeScreen";

test("HomeScreen component renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
