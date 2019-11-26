import React, { useState } from "react";
import { SafeAreaView, ScrollView, Linking } from "react-native";
import DialogInput from "react-native-dialog-input";

import { HeaderIcon } from "../../components/HeaderIcon";
import { styles, bootstrap } from "./styles";
import { CardRectangle } from "../../components/CardRec";
import { Store } from "../../utils/store";

const Settings = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [action, setAction] = useState(0);

  const help = () => {
    Linking.openURL(
      `https://api.whatsapp.com/send?text=Type your message&phone=${Store.WEBMASTER_CONTACT}`
    );
  };
  const closeDialog = () => {
    setDialogVisible(false);
  };
  const saveChanges = input => {
    const value = Number(input);
    if (value && action) {
      Store.MULTIPLIER = value;
      // SAVE TO STORGE
    } else {
      Store.EXCHANGE_RATE = value;
    }
    setDialogVisible(false);
  };
  const changeRate = () => {
    setAction(0);
    setDialogVisible(true);
  };
  const changeMultiplier = () => {
    setAction(1);
    setDialogVisible(true);
  };
  return (
    <SafeAreaView style={[bootstrap.flex, bootstrap.bgGrey]}>
      <ScrollView style={[bootstrap.bgGrey, styles.body, bootstrap.container]}>
        <CardRectangle
          icon="user"
          navigation={navigation}
          screen="Profile"
          text="Edit Profile"
        />
        <CardRectangle
          icon="dollar-sign"
          navigation={navigation}
          action={changeRate}
          screen="ExchangeRate"
          text={`Exchange rate - ${Store.EXCHANGE_RATE}`}
        />
        <CardRectangle
          icon="equals"
          navigation={navigation}
          action={changeMultiplier}
          screen="Multiplier"
          text={`Show prices in multiples of ${Store.MULTIPLIER}`}
        />
        <CardRectangle
          icon="whatsapp"
          navigation={navigation}
          screen="Help"
          action={help}
          text={`Help & Support`}
        />
      </ScrollView>

      <DialogInput
        isDialogVisible={dialogVisible}
        title={action ? "Prices in multiples of" : "Exchange Rate"}
        initValueTextInput={
          action ? Store.MULTIPLIER.toString() : Store.EXCHANGE_RATE.toString()
        }
        textInputProps={{ keyboardType: "numeric" }}
        submitInput={saveChanges}
        closeDialog={closeDialog}
      ></DialogInput>
    </SafeAreaView>
  );
};

Settings.navigationOptions = ({ navigation }) => {
  return {
    title: "Settings",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { Settings };
