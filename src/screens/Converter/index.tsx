import React from "react";
import { Blank } from "../Blank";
import { HeaderIcon } from "../../components/HeaderIcon/index";

const Converter = () => {
  return <Blank />;
};

Converter.navigationOptions = ({ navigation }) => {
  return {
    title: "Case Credit Converter",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { Converter };
