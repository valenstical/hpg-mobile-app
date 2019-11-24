import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";

import { HeaderIcon } from "../../components/HeaderIcon";
import { styles, bootstrap } from "./styles";
import { Card } from "./card";

const Centers = () => {
  return (
    <SafeAreaView style={[bootstrap.flex, bootstrap.bgGrey]}>
      <FlatList
        contentContainerStyle={[
          bootstrap.bgGrey,
          styles.body,
          bootstrap.container
        ]}
        data={centers}
        renderItem={({ item }) => <Card center={item} />}
        keyExtractor={item => item.city}
      />
    </SafeAreaView>
  );
};

Centers.navigationOptions = ({ navigation }) => {
  return {
    title: "Product Centers",
    headerRight: (
      <HeaderIcon icon="home" navigation={navigation} screen="Home" />
    )
  };
};

const centers = [
  {
    city: "Abuja",
    address: "Wildot Plaza Plot 903, Obafemi Awolowo Way, Utako, Abuja.",
    contact: "2348141371617"
  },
  {
    city: "Asaba",
    address:
      "Usonia House, 308 Inebisi Road (Beside Diamond Bank) Asaba, Delta State.",
    contact: "2348141371619"
  },
  {
    city: "Benin City",
    address: "68, Oghosa Crescent, Off Ihama Road, G.R.A Benin City.",
    contact: "23408141371596"
  },
  {
    city: "Calabar",
    address: "No. 76, Ndidem Usang Iso Road, Cross River State.",
    contact: "2348141371618"
  },
  {
    city: "Enugu",
    address:
      "C/2 Garden Avenue (By Bridge Water Hotel) Opposite ESUT Business School Enugu, Enugu State.",
    contact: "2349053898681"
  },
  {
    city: "Ibadan",
    address: "44, Awolowo Avenue, Old Bodija, Ibadan.",
    contact: "2348141371614"
  },
  {
    city: "Jalingo",
    address:
      "De Bas Plaza, 116 Hamaruwa Road, Near NYSC Secretariat, Jalingo, Taraba State",
    contact: "2348141371623"
  },

  {
    city: "Lagos Head Office",
    address:
      "Forever Complex, 21/23 Aromire Avenue, Odd Adeniyi Jones, Ikeja, Lagos.",
    contact: "2348141371613"
  },
  {
    city: "Lagos - Ikeja",
    address: "Buffalo House 2, Allen Avenue Ikeja, Lagos State.",
    contact: ""
  },

  {
    city: "Lagos - Victoria Island",
    address:
      "35b Bishop Aboyede Cole, by Mobile Head Office, Victoria Island, Lagos State.",
    contact: "2348141371621"
  },
  {
    city: "Port Harcourt",
    address: "No. 118 Woji Road, Phase 1, GRA, Port Harcourt, River State.",
    contact: "2348141371597"
  },

  {
    city: "Kano",
    address: "Ummi Plaza, 11-15 Trade Fair Complex, Kano State.",
    contact: "2348141371600"
  },

  {
    city: "Warri",
    address:
      "2 NNPC Complex Road, Near Ekpan Police Station, Effurun Warri, Delta State.",
    contact: "2348079534606"
  }
];

export { Centers };
