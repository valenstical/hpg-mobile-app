import { StyleSheet } from "react-native";
import { bootstrap, baseStyle } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  formControl: {
    borderBottomColor: baseStyle.primaryColor,
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingTop: 0,
    paddingBottom: 0
  },

  formGroup: {
    marginBottom: 30
  },

  formLabel: {
    marginBottom: 5
  }
});

export { bootstrap, styles };
