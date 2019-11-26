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
  }
});

export { bootstrap, styles };
