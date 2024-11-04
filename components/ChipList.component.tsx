import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";
import useFilteredIngredients from "../hooks/FilteredIngredients";

const ChipList = ({ selectedId, onSelect }) => {
  // Usa el hook para obtener la lista filtrada de ingredientes
  const initialItems = useFilteredIngredients(selectedId);
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    setItems(initialItems); // Actualiza items cada vez que cambie el menú
  }, [initialItems]);

  const handlePress = (selectedItem) => {
    const updatedItems = items.map((item) =>
      item.id === selectedItem.id
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    );
    setItems(updatedItems);
    onSelect(selectedItem);
  };

  return (
    <View style={styles.chipContainer}>
      {items.map((item) => (
        <Chip
          key={item.id}
          selected={item.isSelected} // Usa la propiedad isSelected directamente
          selectedColor="purple"
          mode="outlined"
          onPress={() => handlePress(item)}
          style={styles.chip}
        >
          {item.label}
        </Chip>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", // Ajusta la distribución
    marginTop:10,
    marginBottom:10
  },
  chip: {
    margin: 4, // Espacio entre chips
  },
});

export default ChipList;
