import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { styles, bootstrap } from "./styles";
import { share } from "../../utils/helpers";

export const Card = ({ center = {} as any }) => {
  const call = () => {
    Linking.openURL(`tel:+${center.contact}`);
  };
  const shareContact = () => {
    share(`FLP Office ${center.city}\n${center.address}`);
  };

  return (
    <View style={[styles.gridItem]}>
      <Text style={[bootstrap.textBold, styles.title]}>{center.city}</Text>
      <Text style={[bootstrap.textLight, styles.subText]}>
        {center.address}
      </Text>
      <Text style={[bootstrap.textLight, styles.subText, styles.tel]}>
        {center.contact ? "+" : "N/A"}
        {center.contact}
      </Text>
      <View style={[bootstrap.row]}>
        {center.contact ? (
          <TouchableOpacity onPress={call}>
            <Icon
              name="phone"
              size={12}
              style={[bootstrap.iconGreen, styles.icon]}
            />
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={shareContact}>
          <Icon
            name="share-alt"
            size={12}
            style={[bootstrap.iconRed, styles.icon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
