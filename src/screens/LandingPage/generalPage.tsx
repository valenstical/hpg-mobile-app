import React from "react";
import { FlatList } from "react-native";

import { styles, bootstrap } from "./styles";
import { ShareItem } from "./shareItem";
import * as Images from "../../utils/images";
import { Store } from "../../utils/store";

export const GeneralPages = () => {
  return (
    <FlatList
      contentContainerStyle={[bootstrap.container, styles.body]}
      data={data}
      renderItem={({ item }) => (
        <ShareItem text={item.text} message={item.message} image={item.image} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const data = [
  {
    text: "Your customized link for the HPG Website (Auto Link)",
    message: `https://www.hpgworldwide.org/landing/home/${Store.DISTRIBUTOR.code}/`,
    id: "1",
    image: Images.website
  },
  {
    text: "Clean 9",
    message: `https://www.hpgworldwide.org/landing/health2wealth/${Store.DISTRIBUTOR.code}/`,
    id: "2",
    image: Images.clean
  },
  {
    text: "Gel your way to the top",
    message: `https://www.hpgworldwide.org/landing/gel/${Store.DISTRIBUTOR.code}/`,
    id: "3",
    image: Images.gel
  },
  {
    text: "Save a heart campaign",
    message: `https://www.hpgworldwide.org/landing/cardio/${Store.DISTRIBUTOR.code}/`,
    id: "4",
    image: Images.heart
  }
];
