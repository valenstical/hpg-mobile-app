import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableNativeFeedback
} from "react-native";
import ViewPager from "@react-native-community/viewpager";

import { HeaderIcon } from "../../components/HeaderIcon";
import { GeneralPages } from "./generalPage";
import { styles, bootstrap } from "./styles";
import { CustomPages } from "./customPage";

const LandingPage = () => {
  const viewPager = useRef(null);

  const [tab, setTab] = useState(0);

  const setTab1 = () => {
    viewPager.current.setPage(0);
    setTab(0);
  };
  const setTab2 = () => {
    viewPager.current.setPage(1);
    setTab(1);
  };
  return (
    <SafeAreaView style={[bootstrap.flex, bootstrap.bgGrey]}>
      <View style={styles.tab}>
        <TouchableNativeFeedback onPress={setTab1}>
          <Text
            style={[
              styles.tabItem,
              bootstrap.fontBold,
              tab === 0 ? styles.tabActive : styles.tabItem
            ]}
          >
            General
          </Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={setTab2}>
          <Text
            style={[
              styles.tabItem,
              bootstrap.fontBold,
              tab === 1 ? styles.tabActive : styles.tabItem
            ]}
          >
            Customized
          </Text>
        </TouchableNativeFeedback>
      </View>
      <ViewPager
        style={bootstrap.flex}
        initialPage={0}
        ref={viewPager}
        scrollEnabled={false}
      >
        <GeneralPages key={1} />
        <CustomPages key={2} />
      </ViewPager>
    </SafeAreaView>
  );
};

LandingPage.navigationOptions = ({ navigation }) => {
  return {
    title: "Landing Pages",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

export { LandingPage };
