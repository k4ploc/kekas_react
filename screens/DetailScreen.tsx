// screens/DetailsScreen.js
import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, MD3DarkTheme, TextInput } from "react-native-paper";
import ChipList from "../components/ChipList.component";
import PreparationList from "../components/preparation/PreparationList";

type Ingrediente = { id: number; label: string; value: string };
const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [checked, setChecked] = useState(false);
  const [ingredienteExtraCheck, setIngredienteExtraCheck] = useState(false);

  const [ingredienteSelected, setIngredienteSelected] = useState<Ingrediente>({
    id: 0,
    label: "",
    value: "",
  });
  const [text, setText] = useState("");

  const items = [
    { type: "checkbox", value: "queso", label: "Queso" },
    { type: "checkbox", value: "crema", label: "Crema" },
    { type: "checkbox", value: "lechuga", label: "Lechuga" },
    { type: "checkbox", value: "nopales", label: "Nopales" },
    { type: "radio", value: "salsa_verde", label: "Salsa Verde" },
    { type: "radio", value: "salsa_roja", label: "Salsa Roja" },
    { type: "radio", value: "sin_salsa", label: "Sin salsa" },
  ];

  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedChecks, setSelectedChecks] = useState({});

  const handleSelectionChange = (radioValue, checkValues) => {
    setSelectedRadio(radioValue);
    setSelectedChecks(checkValues);
  };

  const getSelectedValues = () => {
    const selectedCheckboxes = Object.keys(selectedChecks).filter(
      (key) => selectedChecks[key]
    );
    Alert.alert(
      "Selected Values",
      `Chip: ${
        ingredienteSelected.value
      }\nQueso Extra: ${checked}\nIngrediente Extra: ${ingredienteExtraCheck}\nInput: ${text}\nRadio: ${selectedRadio}\nCheckboxes: ${selectedCheckboxes.join(
        ", "
      )}`
    );
  };

  const handleChipSelect = (item) => {
    setIngredienteSelected(item);
    if (item.id === 6) {
      setChecked(false);
    }
  };

  useEffect(() => {
    if (ingredienteSelected.id === 6) {
      setChecked(false);
    }
  }, [ingredienteSelected]);

  const CheckboxItem = ({ label, isChecked, onPress }) => (
    <Pressable style={styles.checkboxTouchable} onPress={onPress}>
      <Checkbox
        status={isChecked ? "checked" : "unchecked"}
        onPress={onPress}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona cantidad</Text>
      <Text style={styles.title}>Selecciona ingrediente</Text>
      <ChipList selectedId={id} onSelect={handleChipSelect} />
      <View style={styles.checkboxContainer}>
        {id === 1 && ingredienteSelected.id !== 6 && (
          <CheckboxItem
            label="Queso Extra"
            isChecked={checked}
            onPress={() => setChecked(!checked)}
          />
        )}
        <CheckboxItem
          label="Ingrediente Extra"
          isChecked={ingredienteExtraCheck}
          onPress={() => {
            setIngredienteExtraCheck(!ingredienteExtraCheck);
            setText("");
          }}
        />
      </View>

      {ingredienteExtraCheck && (
        <TextInput
          autoFocus={false}
          label="Ingrediente extra"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
        />
      )}

      <Text style={styles.title}>Preparación</Text>
      <PreparationList
        items={items}
        onSelectionChange={handleSelectionChange}
      />
      <Button onPress={getSelectedValues}>Get Selected Values</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
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
});
export default DetailsScreen;
