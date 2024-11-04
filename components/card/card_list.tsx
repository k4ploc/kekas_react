import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";

const data = [
  {
    id: 1,
    label: "Quesadilla",
    imgUrl:
      "https://www.maricruzavalos.com/wp-content/uploads/2022/03/mexican-quesadillas-fritas.jpg",
  },
  {
    id: 2,
    label: "Tostada",
    imgUrl:
      "https://www.cocinaconalegria.com/wp-content/themes/yootheme/cache/89/Img16478-89975e90.webp",
  },

  {
    id: 3,
    label: "Pambazo",
    imgUrl:
      "https://i.blogs.es/a33478/copia-de-portada---2024-09-02t102449.946/1366_2000.jpg",
  },
  {
    id: 4,
    label: "Sope",
    imgUrl:
      "https://gastronomiamexicana.wordpress.com/wp-content/uploads/2015/02/sopes.jpg",
  },

  {
    id: 5,
    label: "Gordita",
    imgUrl:
      "https://mexicotravelchannel.com.mx/wp-content/uploads/2021/04/gorditas-mexico-travel.jpg",
  },
  {
    id: 6,
    label: "Refresco",
    imgUrl:
      "https://thefoodtech.com/wp-content/uploads/2020/05/bebidas-azucaradas.jpg",
  },
];

const numColumns = 2;
const size = Dimensions.get("window").width / numColumns - 20;
const height = Dimensions.get("window").height / 3 - 35;

const CardList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.item}
      // onPress={() => console.log(item.id)}
      onPress={() =>
        navigation.navigate("Details", { id: item.id, title: item.label })
      }
    >
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.imgUrl }} style={styles.cover} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{item.label}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  item: {
    width: size,
    height: height - 25,
    margin: 5,
  },
  card: {
    flex: 1,
  },
  cover: {
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0, // Coloca el overlay en la parte inferior
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  overlayText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CardList;
