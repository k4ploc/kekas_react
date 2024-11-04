import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';

const PreparationList = ({ items, onSelectionChange }) => {
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedChecks, setSelectedChecks] = useState({});

  const handleRadioPress = (value) => {
    setSelectedRadio(value);
  };

  const handleCheckboxPress = (value) => {
    setSelectedChecks((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  useEffect(() => {
    onSelectionChange(selectedRadio, selectedChecks);
  }, [selectedRadio, selectedChecks]);

  return (
    <View>
      {items.map((item) => {
        if (item.type === 'radio') {
          return (
            <Pressable
              key={item.value}
              style={styles.item}
              onPress={() => handleRadioPress(item.value)}
            >
              <RadioButton
                value={item.value}
                status={selectedRadio === item.value ? 'checked' : 'unchecked'}
              />
              <Text style={styles.text}>{item.label}</Text>
            </Pressable>
          );
        } else if (item.type === 'checkbox') {
          return (
            <Pressable
              key={item.value}
              style={styles.item}
              onPress={() => handleCheckboxPress(item.value)}
            >
              <Checkbox
                status={selectedChecks[item.value] ? 'checked' : 'unchecked'}
              />
              <Text style={styles.text}>{item.label}</Text>
            </Pressable>
          );
        }
        return null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize:18
  //  marginLeft: 8,
  },
});

export default PreparationList;
