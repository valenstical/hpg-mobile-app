import React from "react";
import { Blank } from "../Blank";
import { HeaderIcon } from "../../components/HeaderIcon/index";

const BMI = () => {
  return <Blank />;
};

BMI.navigationOptions = ({ navigation }) => {
  return {
    title: "BMI Calculator",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { BMI };
