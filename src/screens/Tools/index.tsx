import React from "react";
import { SafeAreaView, ScrollView, Linking, View } from "react-native";

import { HeaderIcon } from "../../components/HeaderIcon";
import { styles, bootstrap } from "./styles";
import { CardRectangle } from "../../components/CardRec";
import { Store } from "../../utils/store";
import { share } from "../../utils/helpers";

const Tools = ({ navigation }) => {
  const inviteToBuy = () => {
    share(`${Store.WEB_URL}/flp/store/?distribID=${Store.DISTRIBUTOR.id}`);
  };
  const inviteToRegister = () => {
    share(`${Store.WEB_URL}/flp/register/?distribID=${Store.DISTRIBUTOR.id}`);
  };

  const checkCC = () => {
    Linking.openURL("https://shop.foreverliving.com/distribNew/Login.do");
  };

  const shopOnline = () => {
    Linking.openURL(
      `${Store.WEB_URL}/flp/store/?distribID=${Store.DISTRIBUTOR.id}`
    );
  };
  return (
    <SafeAreaView style={[bootstrap.flex, bootstrap.bgGrey]}>
      <ScrollView style={[styles.body, bootstrap.container]}>
        <CardRectangle
          icon="hotel"
          navigation={navigation}
          screen="Centers"
          text="Product Centres"
          colorStyle={bootstrap.iconGreen}
        />
        <CardRectangle
          icon="bullhorn"
          navigation={navigation}
          text="Invite to Register"
          action={inviteToRegister}
          colorStyle={bootstrap.iconPurple}
        />
        <CardRectangle
          icon="shopping-bag"
          navigation={navigation}
          text="Invite to Buy Products"
          action={inviteToBuy}
          colorStyle={bootstrap.iconBrown}
        />
        <CardRectangle
          icon="globe-africa"
          navigation={navigation}
          text="Check your CC"
          action={checkCC}
          colorStyle={bootstrap.iconRed}
        />
        <CardRectangle
          icon="shopping-cart"
          navigation={navigation}
          text="Shop Online"
          action={shopOnline}
          colorStyle={bootstrap.iconOrange}
        />

        <CardRectangle
          icon="balance-scale"
          navigation={navigation}
          screen="Converter"
          text="Case Credit Converter"
          colorStyle={bootstrap.iconGreen}
        />
        <CardRectangle
          icon="weight"
          navigation={navigation}
          screen="BMI"
          text="BMI Calculator"
        />
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

Tools.navigationOptions = ({ navigation }) => {
  return {
    title: "Extra Tools",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { Tools };
