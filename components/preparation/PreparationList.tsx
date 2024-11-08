import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import usePreparationSelection from "../../hooks/PreparationSelection";

const PreparationList = ({ onSelectionChange, idMenu, isQuesoDisabled }) => {
  const {
    items,
    selectedRadio,
    selectedChecks,
    handleRadioPress,
    handleCheckboxPress,
  } = usePreparationSelection(onSelectionChange, idMenu, isQuesoDisabled);

  return (
    <View>
      {items.map((item) => (
        <Pressable
          key={item.value}
          style={styles.item}
          onPress={() =>
            item.type === "radio"
              ? handleRadioPress(item.value)
              : handleCheckboxPress(item.value)
          }
        >
          {item.type === "radio" ? (
            <RadioButton
              value={item.value}
              status={selectedRadio === item.value ? "checked" : "unchecked"}
              onPress={() => handleRadioPress(item.value)}
            />
          ) : (
            <Checkbox
              status={selectedChecks[item.value] ? "checked" : "unchecked"}
              onPress={() => handleCheckboxPress(item.value)}
            />
          )}
          <Text style={styles.text}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default PreparationList;
