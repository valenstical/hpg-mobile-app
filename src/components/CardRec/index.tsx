import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { styles, bootstrap } from "./styles";

export const CardRectangle = ({
  text = "",
  screen = "",
  icon = "",
  navigation,
  colorStyle = bootstrap.iconBlue,
  action = null
}) => {
  const handlePress = () => {
    if (action) {
      return action();
    }
    navigation.navigate(screen);
  };

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={[styles.gridItem, bootstrap.row]}>
        <Icon
          name={icon}
          style={[styles.icon, bootstrap.circle, colorStyle]}
          size={16}
        />
        <Text style={[bootstrap.textBold, styles.title]}>{text}</Text>
        <Icon size={22} style={styles.arrow} name="angle-right" />
      </View>
    </TouchableNativeFeedback>
  );
};
