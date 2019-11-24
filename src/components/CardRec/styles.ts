import { StyleSheet } from "react-native";
import { bootstrap, baseStyle } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 5,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 15,
    elevation: 1,
    marginBottom: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 15,
    color: "#606060",
    flex: 1,
    textTransform: "capitalize",
    marginRight: 10
  },

  arrow: {
    color: "#606060"
  },

  icon: {
    width: 40,
    height: 40,
    textAlign: "center",
    paddingTop: 12,
    marginRight: 12
  }
});

export { bootstrap, styles };
