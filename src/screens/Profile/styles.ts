import { StyleSheet } from "react-native";
import { bootstrap, baseStyle } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  body: {
    paddingTop: 0,
    paddingBottom: 20
  },
  name: {
    fontSize: 15,
    textTransform: "capitalize"
  },

  itemDescription: {
    fontSize: 14,
    textAlign: "center"
  },

  itemImage: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  greetingGrp: {
    paddingTop: 50,
    paddingBottom: 50,
    marginBottom: 20,
    marginRight: -15,
    marginLeft: -15,
    elevation: 0
  },
  greetingsName: {
    alignSelf: "center",
    alignItems: "center"
  }
});

export { bootstrap, styles };
