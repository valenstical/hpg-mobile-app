import { StyleSheet } from "react-native";
import { bootstrap } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingBottom: 10
  },

  title: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 25,
    color: "#2c2b2b",
    textAlign: "center"
  },

  subText: {
    fontSize: 13,
    marginBottom: 5,
    color: "#515151",
    textAlign: "center"
  },
  tel: {
    letterSpacing: 1
  },

  icon: {
    width: 50,
    height: 50,
    textAlign: "center",
    paddingTop: 12,
    marginRight: 12,
    marginTop: 50,
    fontSize: 20,
    borderRadius: 1000
  }
});

export { bootstrap, styles };
