// __tests__/ProfileScreen.test.tsx
import * as React from "react";
import * as renderer from "react-test-renderer";
import ProfileScreen from "../src/screens/ProfileScreen";

test("ProfileScreen component renders correctly", () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
