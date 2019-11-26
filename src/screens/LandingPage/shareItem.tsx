import React from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Share
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { styles, bootstrap } from "./styles";

export const ShareItem = ({ text = "", message = "", image }) => {
  const handlePress = async () => {
    await Share.share({
      message,
      title: "Share using"
    }).catch(() => {});
  };
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={[styles.gridItem, bootstrap.row]}>
        <Image source={image} style={[styles.itemImage, bootstrap.rounded]} />
        <Text style={[bootstrap.textBold, styles.itemTitle]}>{text}</Text>
        <Icon size={15} style={styles.shareIcon} name="share-alt" />
      </View>
    </TouchableNativeFeedback>
  );
};
