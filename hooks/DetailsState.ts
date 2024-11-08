import { useState } from "react";
import { Alert } from "react-native";

const useDetailsState = (initialPrice) => {
  //const [checked, setChecked] = useState(false);
  const [precioQuesoExtra, setPrecioQuesoExtra] = useState(0);
  const [ingredienteExtraCheck, setIngredienteExtraCheck] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [ingredienteSelected, setIngredienteSelected] = useState({
    id: 0,
    label: "",
    value: "",
  });
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedChecks, setSelectedChecks] = useState({});
  const [text, setText] = useState("");
  const [isQuesoDisabled, setIsQuesoDisabled] = useState(false);

  const handleChipSelect = (item) => {
    setIngredienteSelected(item);
    if (item.id === 6) {
      setIsQuesoDisabled(true);
    } else {
      setIsQuesoDisabled(false);
    }
  };

  /*const toggleQuesoExtra = () => {
    setChecked(!checked);
    setPrecioQuesoExtra(checked ? 0 : 2);
  };*/

  const subtotal = (initialPrice + precioQuesoExtra) * counterValue;

  const getSelectedValues = () => {
    const selectedCheckboxes = Object.keys(selectedChecks).filter(
      (key) => selectedChecks[key]
    );
    Alert.alert(
      "Selected Values",
      `Cantidad: ${counterValue}\nChip: ${
        ingredienteSelected.value
      }\nIngrediente Extra: ${ingredienteExtraCheck}\nInput: ${text}\nRadio: ${selectedRadio}\nCheckboxes: ${selectedCheckboxes.join(
        ", "
      )}\nSubtotal: ${subtotal}`
    );
  };

  return {
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
    setCounterValue,
    setIngredienteExtraCheck,
    setSelectedChecks,
    setText,
    handleChipSelect,
    //  toggleQuesoExtra,
    getSelectedValues,
    setSelectedRadio,
  };
};

export default useDetailsState;
