import { StyleSheet } from "react-native";

export const baseStyle = {
  primaryColor: "#3f51b5",
  fontBold: "Montserrat-Bold",
  fontLight: "Montserrat-SemiBold",
  primaryColorDark: "#303f9f"
};

export const bootstrap = StyleSheet.create({
  flex: {
    flex: 1
  },
  textCenter: {
    textAlign: "center"
  },
  textCapitalize: {
    textTransform: "capitalize"
  },
  textRight: {
    textAlign: "right"
  },
  textLeft: {
    textAlign: "left"
  },
  bgPrimary: {
    backgroundColor: baseStyle.primaryColor
  },
  textPrimary: {
    color: baseStyle.primaryColor
  },
  textPrimaryDark: {
    color: baseStyle.primaryColorDark
  },
  textBold: {
    fontFamily: baseStyle.fontBold,
    color: "#7a7c7d"
  },
  fontBold: {
    fontFamily: baseStyle.fontBold
  },
  fontLight: {
    fontFamily: baseStyle.fontLight
  },
  textWhite: {
    color: "white"
  },
  textMuted: {
    opacity: 0.7
  },
  textLight: {
    fontFamily: baseStyle.fontLight,
    color: "#a5a5a5",
    opacity: 0.9
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  ml5: {
    marginLeft: 7
  },
  mr5: {
    marginRight: 7
  },

  mt5: {
    marginTop: 7
  },
  mb5: {
    marginBottom: 7
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15
  },
  containerFluid: {
    paddingLeft: 10,
    paddingRight: 10
  },
  circle: {
    borderRadius: 1000
  },
  rounded: {
    borderRadius: 5
  },
  headerTitleStyle: {
    color: "white",
    fontFamily: baseStyle.fontBold,
    textTransform: "capitalize",
    fontSize: 13,
    textAlign: "center",
    flex: 1
  },
  headerBackgroundStyle: {
    backgroundColor: baseStyle.primaryColor,
    elevation: 5
  },
  headerIcon: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 8,
    paddingBottom: 8
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.36)"
  },
  profile: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "white"
  },
  bgGrey: {
    backgroundColor: "#f5f6f7"
  },
  icon: {
    paddingLeft: 10
  },
  btnPrimary: {
    backgroundColor: baseStyle.primaryColor,
    color: "white",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
    borderRadius: 4,
    fontFamily: "Nunito-Bold"
  },
  iconBlue: {
    color: baseStyle.primaryColor,
    backgroundColor: "rgba(63, 81, 181, 0.32)"
  },
  iconRed: {
    color: "#c70d3a",
    backgroundColor: "rgba(199, 13, 58, 0.32)"
  },
  iconGreen: {
    color: "#004445",
    backgroundColor: "rgba(0, 68, 69, 0.32)"
  },
  iconYellow: {
    color: "#ffd800",
    backgroundColor: "rgba(255, 216, 0, 0.32)"
  },
  iconBrown: {
    color: "#da9833",
    backgroundColor: "rgba(218, 152, 51, 0.32)"
  },
  iconOrange: {
    color: "#f75f00",
    backgroundColor: "rgba(247, 95, 0, 0.32)"
  },
  iconPurple: {
    color: "#6d0c74",
    backgroundColor: "rgba(109, 12, 116, 0.32)"
  }
});
