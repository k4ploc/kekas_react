import { StyleSheet } from "react-native";
import { MD3DarkTheme } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#FFF",
    //borderWidth: 1,
    // borderColor: "#000",
  },
  title: {
    fontSize: 20,
    padding: 5,
    textTransform: "uppercase",
    backgroundColor: MD3DarkTheme.colors.onSecondaryContainer,
  },
  checkboxContainer: {
    width: "100%",
    alignItems: "center",
    //borderWidth: 1,
    // borderColor: "#000",
  },
  checkboxTouchable: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    //borderWidth: 1,
    // borderColor: "#000",
    //padding: 3,
  },
  checkboxLabel: { fontSize: 16, textTransform: "uppercase" },
  textInput: {
    width: "100%",

    //padding: 8,
    // marginVertical: 16,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    //borderTopWidth: 1,
    //borderColor: "#000",
    backgroundColor: "#fff",
  },
  priceText: { fontSize: 18 },
});

export default styles;
