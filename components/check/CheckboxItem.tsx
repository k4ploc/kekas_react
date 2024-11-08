import React from "react";
import { Pressable, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import styles from "../styles";

const CheckboxItem = ({ label, isChecked, onPress }) => (
  <Pressable style={styles.checkboxTouchable} onPress={onPress}>
    <Checkbox status={isChecked ? "checked" : "unchecked"} onPress={onPress} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </Pressable>
);

export default CheckboxItem;
