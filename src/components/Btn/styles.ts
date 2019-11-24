import { StyleSheet } from "react-native";
import { bootstrap, baseStyle } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  btn: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    padding: 12,
    fontFamily: baseStyle.fontBold,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: baseStyle.primaryColor
  }
});

export { bootstrap, styles };
