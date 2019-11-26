import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./src";
import { baseStyle } from "./src/utils/bootstrap";

export default () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={baseStyle.primaryColorDark}
      />
      <Navigation />
    </>
  );
};
