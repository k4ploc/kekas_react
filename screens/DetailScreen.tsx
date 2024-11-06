// screens/DetailsScreen.js
import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, MD3DarkTheme, TextInput } from "react-native-paper";
import ChipList from "../components/ChipList.component";
import CounterComponent from "../components/counter/CounterCompoent";
import PreparationList from "../components/preparation/PreparationList";

type Ingrediente = { id: number; label: string; value: string };
const DetailsScreen = ({ route }) => {
  const { id, price } = route.params;
  const [checked, setChecked] = useState(false);
  const [precioQuesoExtra, setPrecioQuesoExtra] = useState(0);
  const [ingredienteExtraCheck, setIngredienteExtraCheck] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  const [ingredienteSelected, setIngredienteSelected] = useState<Ingrediente>({
    id: 0,
    label: "",
    value: "",
  });
  const [text, setText] = useState("");

  const handleValueChange = (value) => {
    setCounterValue(value);
  };

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
      `Cantidad:${counterValue}\nChip: ${
        ingredienteSelected.value
      }\nQueso Extra: ${checked}\nIngrediente Extra: ${ingredienteExtraCheck}\nInput: ${text}\nRadio: ${selectedRadio}\nCheckboxes: ${selectedCheckboxes.join(
        ", "
      )}\nSubtotal:${(price + precioQuesoExtra) * counterValue}`
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
      <CounterComponent initialValue={1} onValueChange={handleValueChange} />
      <Text style={styles.title}>Selecciona ingrediente</Text>
      <ChipList selectedId={id} onSelect={handleChipSelect} />
      <View style={styles.checkboxContainer}>
        {id === 1 && ingredienteSelected.id !== 6 && (
          <CheckboxItem
            label="Queso Extra"
            isChecked={checked}
            onPress={() => {
              setChecked(!checked);
              setPrecioQuesoExtra(checked ? 0 : 2);
            }}
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

      <View style={styles.footer}>
        <Text style={styles.priceText}>
          Precio: ${((price + precioQuesoExtra) * counterValue).toFixed(2)}
        </Text>
        <Button mode="contained" onPress={getSelectedValues}>
          Get Selected Values
        </Button>
      </View>
    </View>
  );
};
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
export default DetailsScreen;
