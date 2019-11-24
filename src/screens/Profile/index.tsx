import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

import { styles, bootstrap } from "./styles";
import { Store } from "../../utils/store";
import { HeaderIcon } from "../../components/HeaderIcon";
import { Input } from "../../components/Input";
import { Btn } from "../../components/Btn";

const Profile = () => {
  const handleSubmit = () => {};
  return (
    <SafeAreaView style={[bootstrap.flex, bootstrap.bgGrey]}>
      <ScrollView
        contentContainerStyle={[
          bootstrap.container,
          styles.body,
          bootstrap.bgGrey
        ]}
      >
        <View
          style={[
            styles.greetingGrp,
            bootstrap.column,
            bootstrap.container,
            bootstrap.bgPrimary
          ]}
        >
          <View style={styles.greetingsName}>
            <TouchableOpacity>
              <Image
                source={{ uri: Store.DISTRIBUTOR.image }}
                style={[bootstrap.circle, bootstrap.profile]}
              />
            </TouchableOpacity>
            <Text
              style={[
                bootstrap.textBold,
                styles.name,
                bootstrap.mt5,
                bootstrap.textWhite
              ]}
            >
              {Store.DISTRIBUTOR.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.itemDescription,
                bootstrap.textLight,
                bootstrap.textMuted,
                bootstrap.textWhite
              ]}
            >
              {Store.DISTRIBUTOR.id}
            </Text>
          </View>
        </View>

        <View>
          <Input
            value={Store.DISTRIBUTOR.name}
            title="Name"
            extraStyle={bootstrap.textCapitalize}
          />
          <Input value={Store.DISTRIBUTOR.email} title="Email" />
          <Input value={Store.DISTRIBUTOR.phone} title="Phone" />
          <Btn onClick={handleSubmit} text="SAVE CHANGES" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Profile.navigationOptions = ({ navigation }) => {
  return {
    title: "My Profile",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { Profile };
