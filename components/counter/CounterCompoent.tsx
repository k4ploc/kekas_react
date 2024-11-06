import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";

const CounterComponent = ({ initialValue = 0, onValueChange }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    onValueChange(count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1); // Optional: Prevent count going below zero

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={decrement} style={styles.button}>
        <Icon source="minus" color="#FFF" size={20} />
      </Button>
      <Text style={styles.count}>{count}</Text>
      <Button mode="contained" onPress={increment} style={styles.button}>
        <Icon source="plus" color="#FFF" size={20} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth:1
  },
  button: {
    margin: 5,
  },
  count: {
    marginHorizontal: 10,
    fontSize: 30,
  },
});

export default CounterComponent;
