import React from "react";
import { Text, TouchableNativeFeedback } from "react-native";

import { styles, bootstrap } from "./styles";

export const Btn = ({ text = "", onClick, extraStyle = {} }) => {
  return (
    <TouchableNativeFeedback onPress={onClick}>
      <Text
        style={[bootstrap.bgPrimary, styles.btn, bootstrap.mt5, extraStyle]}
      >
        {text}
      </Text>
    </TouchableNativeFeedback>
  );
};
