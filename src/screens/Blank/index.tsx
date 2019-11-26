import React from "react";
import { SafeAreaView, Text } from "react-native";

import { bootstrap, styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Blank = () => {
  return (
    <SafeAreaView
      style={[
        bootstrap.flex,
        bootstrap.bgGrey,
        bootstrap.container,
        { alignItems: "center" }
      ]}
    >
      <Icon
        name="exclamation-triangle"
        style={[styles.icon, bootstrap.iconOrange]}
      />
      <Text style={[bootstrap.textBold, styles.title]}>Under Construction</Text>
      <Text style={[bootstrap.textBold, styles.subText]}>
        We are currntly upgrading this section of the app to serve you better.
        Please check back again later.
      </Text>
    </SafeAreaView>
  );
};

export { Blank };
