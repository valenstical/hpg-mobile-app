import { StyleSheet } from "react-native";
import { bootstrap } from "../../utils/bootstrap";

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    paddingRight: 15,
    elevation: 1,
    marginBottom: 10,
    alignItems: "center"
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20
  },
  itemTitle: {
    fontSize: 13,
    color: "#393939",
    flex: 1,
    textTransform: "capitalize",
    marginRight: 10
  },
  itemDescription: {
    fontSize: 11
  },

  shareIcon: {
    color: "#D33869"
  },

  itemImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    marginRight: 12,
    backgroundColor: "grey"
  },
  tabActive: {
    backgroundColor: "rgba(63, 81, 181, 0.3)",
    borderWidth: 0
  },
  tabItem: {
    color: "rgba(63, 81, 181, 1)",
    borderRadius: 5,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    borderColor: "rgba(112, 112, 112, 0.47)",
    borderStyle: "solid",
    borderWidth: 1
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  }
});

export { bootstrap, styles };
