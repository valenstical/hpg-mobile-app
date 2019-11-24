import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { styles, bootstrap } from "./style";

export const CardSquare = (props: any) => {
  const {
    title = "",
    descrition = "",
    imageSrc = "",
    extraStyle,
    navigation,
    screen = "Home"
  } = props;

  const handlePress = () => {
    navigation.navigate(screen);
  };
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={[styles.gridItem, bootstrap.flex].concat(extraStyle)}>
        <Image source={imageSrc as any} style={styles.itemImage} />
        <Text
          style={[
            bootstrap.textBold,
            styles.itemTitle,
            bootstrap.textPrimaryDark
          ]}
        >
          {title}
        </Text>
        <Text style={[bootstrap.textLight, styles.itemDescription]}>
          {descrition}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
