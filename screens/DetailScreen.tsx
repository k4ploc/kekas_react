import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ChipList from "../components/ChipList.component";
import CheckboxItem from "../components/check/CheckboxItem";
import CounterComponent from "../components/counter/CounterCompoent";
import PreparationList from "../components/preparation/PreparationList";
import styles from "../components/styles";
import useDetailsState from "../hooks/DetailsState";

const DetailsScreen = ({ route }) => {
  const { id, price } = route.params;
  const {
    // checked,
    ingredienteExtraCheck,
    counterValue,
    ingredienteSelected,
    selectedRadio,
    selectedChecks,
    text,
    subtotal,
    isQuesoDisabled,
    precioQuesoExtra,
    setPrecioQuesoExtra,
    setIsQuesoDisabled,
    setSelectedChecks,
    setCounterValue,
    setIngredienteExtraCheck,
    setText,
    handleChipSelect,
    //toggleQuesoExtra,
    getSelectedValues,
    setSelectedRadio,
  } = useDetailsState(price);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona cantidad</Text>
      <CounterComponent initialValue={1} onValueChange={setCounterValue} />

      <Text style={styles.title}>Selecciona ingrediente</Text>
      <ChipList selectedId={id} onSelect={handleChipSelect} />

      <View style={styles.checkboxContainer}>
        {/*id === 1 && ingredienteSelected.id !== 6 && (
          <CheckboxItem
            label="Queso Extra"
            isChecked={checked}
            onPress={toggleQuesoExtra}
          />
        )*/}
        <CheckboxItem
          label="Ingrediente Extra"
          isChecked={ingredienteExtraCheck}
          onPress={() => setIngredienteExtraCheck(!ingredienteExtraCheck)}
        />
      </View>

      {ingredienteExtraCheck && (
        <TextInput
          label="Ingrediente extra"
          value={text}
          onChangeText={setText}
          style={styles.textInput}
        />
      )}

      <Text style={styles.title}>Preparación</Text>
      <PreparationList
        idMenu={id}
        onSelectionChange={(radioValue, checkValues, extraCost) => {
          setSelectedRadio(radioValue);
          setSelectedChecks(checkValues);
          setPrecioQuesoExtra(price + extraCost);
        }}
        isQuesoDisabled={isQuesoDisabled}
      />

      <View style={styles.footer}>
        <Text style={styles.priceText}>Precio: ${subtotal.toFixed(2)}</Text>
        <Button mode="contained" onPress={getSelectedValues}>
          Get Selected Values
        </Button>
      </View>
    </View>
  );
};

export default DetailsScreen;
