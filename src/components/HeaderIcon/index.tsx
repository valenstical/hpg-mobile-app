import React from "react";
import { TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { bootstrap } from "../../utils/bootstrap";

export const HeaderIcon = ({
  navigation,
  screen = "Home",
  icon = "home",
  size = 15
}) => {
  const handlePress = () => {
    navigation.navigate(screen);
  };
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Icon
        name={icon}
        size={size}
        color="white"
        style={bootstrap.headerIcon}
      />
    </TouchableNativeFeedback>
  );
};
