import { StyleSheet } from "react-native";
import { bootstrap } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 22,
    alignItems: "center",
    elevation: 1
  },
  body: {
    paddingTop: 0,
    paddingBottom: 20
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize"
  },
  itemTitle: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10
  },
  itemDescription: {
    fontSize: 11,
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
