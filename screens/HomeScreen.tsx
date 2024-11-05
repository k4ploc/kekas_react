// screens/HomeScreen.js
import React from "react";
import { View } from "react-native";
import CardList from "../components/card/card_list";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <CardList navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
