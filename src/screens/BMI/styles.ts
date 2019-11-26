import { StyleSheet } from "react-native";
import { bootstrap } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingBottom: 10
  },

  gridItem: {
    borderRadius: 5,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 15,
    elevation: 1,
    marginBottom: 10
  },

  title: {
    fontSize: 14,
    marginBottom: 5,
    color: "#2c2b2b"
  },

  subText: {
    fontSize: 13,
    marginBottom: 5,
    color: "#515151"
  },
  tel: {
    letterSpacing: 1
  },

  icon: {
    width: 35,
    marginTop: 15,
    height: 35,
    textAlign: "center",
    paddingTop: 12,
    marginRight: 12,
    borderRadius: 1000
  }
});

export { bootstrap, styles };
