// screens/DetailsScreen.js
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import ChipList from "../components/ChipList.component";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [selectedId, setSelectedId] = useState(id);
  const [checked, setChecked] = useState(false);
  const [ingredienteExtraCheck, setIngredienteExtraCheck] = useState(false);
  const [ingredienteSelected, setIngredienteSelected] = useState(0);

  const handleChipSelect = (item) => {
    console.log("Selected item:", item.label, item.value);
    console.log("Selected  :", item.isSelected);
    console.log("Selected  3:", item);
    setIngredienteSelected(item.id);
    // Si el ingrediente seleccionado es 6, desmarca "Queso Extra"
    if (item.id === 6) {
      setChecked(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona ingrediente</Text>
      <ChipList selectedId={selectedId} onSelect={handleChipSelect} />
      <View style={styles.checkboxContainer}>
        {id === 1 && ingredienteSelected !== 6 && (
          <TouchableOpacity
            style={styles.checkboxTouchable}
            onPress={() => {
              setChecked(!checked);
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.checkboxLabel}>Queso Extra</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.checkboxTouchable}
          onPress={() => {
            setIngredienteExtraCheck(!ingredienteExtraCheck);
          }}
        >
          <Checkbox
            status={ingredienteExtraCheck ? "checked" : "unchecked"}
            onPress={() => {
              setIngredienteExtraCheck(!ingredienteExtraCheck);
            }}
          />
          <Text style={styles.checkboxLabel}>Ingrediente Extra</Text>
        </TouchableOpacity>
      </View>

      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
  },
  title: { fontSize: 20, textTransform: "uppercase" },
  checkboxContainer: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  checkboxTouchable: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    //borderWidth: 1,
    // borderColor: "#000",
    padding: 3,
  },
  checkboxLabel: { fontSize: 16, textTransform: "uppercase" },
});
export default DetailsScreen;
