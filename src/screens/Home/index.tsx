import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import { styles, bootstrap } from "./styles";
import * as Images from "../../utils/images";
import { CardSquare } from "../../components/CardSquare";
import { Store } from "../../utils/store";

const Home = ({ navigation }) => {
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

        <View style={[bootstrap.row, bootstrap.mb5]}>
          <CardSquare
            title="Products"
            extraStyle={[bootstrap.mr5]}
            imageSrc={Images.products}
            descrition="Product prices and information"
            navigation={navigation}
            screen="PriceList"
          />
          <CardSquare
            title="Trainings"
            imageSrc={Images.training}
            extraStyle={[bootstrap.ml5]}
            descrition="Videos, podcasts, presentations"
            navigation={navigation}
            screen="Trainings"
          />
        </View>

        <View style={[bootstrap.row, bootstrap.mt5, bootstrap.mb5]}>
          <CardSquare
            title="Prospects"
            extraStyle={[bootstrap.mr5]}
            imageSrc={Images.prospects}
            descrition="Connect with your prospects"
            navigation={navigation}
            screen="Prospects"
          />
          <CardSquare
            title="Worksheet"
            imageSrc={Images.worksheet}
            extraStyle={[bootstrap.ml5]}
            descrition="Product ordering sheet"
            navigation={navigation}
            screen="Worksheet"
          />
        </View>

        <View style={[bootstrap.row, bootstrap.mt5, bootstrap.mb5]}>
          <CardSquare
            title="Landing Pages"
            extraStyle={[bootstrap.mr5]}
            imageSrc={Images.landing}
            descrition="Auto links, opt-in pages etc"
            navigation={navigation}
            screen="LandingPage"
          />
          <CardSquare
            title="Ailments"
            imageSrc={Images.ailment}
            extraStyle={[bootstrap.ml5]}
            descrition="Product recommendation"
            navigation={navigation}
            screen="Ailments"
          />
        </View>

        <View style={[bootstrap.row, bootstrap.mt5]}>
          <CardSquare
            title="Extra Tools"
            imageSrc={Images.tools}
            extraStyle={[bootstrap.mr5]}
            descrition="Check CC, BMI, Offices etc"
            navigation={navigation}
            screen="Tools"
          />
          <CardSquare
            title="Settings"
            extraStyle={[bootstrap.ml5]}
            imageSrc={Images.settings}
            descrition="Edit your details, exchange rate..."
            navigation={navigation}
            screen="Settings"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { Home };
