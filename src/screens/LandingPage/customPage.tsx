import React from "react";
import { FlatList } from "react-native";

import { styles, bootstrap } from "./styles";
import { ShareItem } from "./shareItem";
import * as Images from "../../utils/images";
import { Store } from "../../utils/store";

const data = [
  {
    title: "Your customized link for the HPG Website (Auto Link)",
    link: `https://www.hpgworldwide.org/landing/home/${Store.DISTRIBUTOR.code}/`,
    id: "1",
    image: Images.website
  }
];
export const CustomPages = () => {
  return (
    <FlatList
      contentContainerStyle={[bootstrap.container, styles.body]}
      data={data}
      renderItem={({ item }) => (
        <ShareItem text={item.title} message={item.link} image={item.image} />
      )}
      keyExtractor={item => item.id}
    />
  );
};
