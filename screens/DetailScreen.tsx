// screens/DetailsScreen.js
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Checkbox, MD3DarkTheme, TextInput } from "react-native-paper";
import ChipList from "../components/ChipList.component";
import PreparationList from "../components/preparation/PreparationList";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [selectedId, setSelectedId] = useState(id);
  const [checked, setChecked] = useState(false);
  const [ingredienteExtraCheck, setIngredienteExtraCheck] = useState(false);
  const [ingredienteSelected, setIngredienteSelected] = useState(0);
  const [text, setText] = useState("");

  const items = [
   
    { type: 'checkbox', value: 'check1', label: 'Check 1' },
    { type: 'checkbox', value: 'check2', label: 'Check 2' },
    { type: 'checkbox', value: 'check3', label: 'Check 3' },
    { type: 'radio', value: 'option1', label: 'Opción 1' },
    { type: 'radio', value: 'option2', label: 'Opción 2' },
    { type: 'radio', value: 'option3', label: 'Opción 3' },
  ];
  
  //preparacion component
  const [selectedRadio, setSelectedRadio] = useState(null); 
  const [selectedChecks, setSelectedChecks] = useState({}); 
  const handleSelectionChange = (radioValue, checkValues) => { 
    setSelectedRadio(radioValue); 
    setSelectedChecks(checkValues); 
  }; 
  
  const getSelectedValues = () => { 
    const selectedCheckboxes = Object.keys(selectedChecks).filter((key) => selectedChecks[key]); 
    Alert.alert('Selected Values', `Radio: ${selectedRadio}\nCheckboxes: ${selectedCheckboxes.join(', ')}`);
  } 
  //preparacion component end
   

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
          <Pressable
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
          </Pressable>
        )}
        <Pressable
          style={styles.checkboxTouchable}
          onPress={() => {
            setIngredienteExtraCheck(!ingredienteExtraCheck);
            setText("");
          }}
        >
          <Checkbox
            status={ingredienteExtraCheck ? "checked" : "unchecked"}
            onPress={() => {
              setIngredienteExtraCheck(!ingredienteExtraCheck);
            }}
          />
          <Text style={styles.checkboxLabel}>Ingrediente Extra</Text>
        </Pressable>
      </View>

      {ingredienteExtraCheck && (
        <TextInput
          autoFocus={false}
          label="Ingrediente extra"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      )}

      <Text style={styles.title}>Preparacion</Text>

      <PreparationList items={items} onSelectionChange={handleSelectionChange} /> 
      <Button onPress={getSelectedValues} >Get Selected Values </Button>

      {/*<Text>Details Screen</Text>
      <Text>ID: {id}</Text>*/}
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
});
export default DetailsScreen;
