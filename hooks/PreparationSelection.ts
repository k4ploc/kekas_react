import { useEffect, useState } from "react";

const usePreparationSelection = (
  onSelectionChange,
  idMenu,
  isQuesoDisabled
) => {
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedChecks, setSelectedChecks] = useState({});

  // Lista de items con lógica de filtrado, incluyendo isQuesoDisabled
  const items = [
    ...(!isQuesoDisabled
      ? [{ type: "checkbox", value: "queso", label: "Queso" }]
      : []),
    { type: "checkbox", value: "crema", label: "Crema" },
    { type: "checkbox", value: "lechuga", label: "Lechuga" },
    ...(idMenu === 4 || idMenu === 5
      ? [{ type: "checkbox", value: "nopales", label: "Nopales" }]
      : []),
    { type: "radio", value: "salsa_verde", label: "Salsa Verde" },
    { type: "radio", value: "salsa_roja", label: "Salsa Roja" },
    { type: "radio", value: "sin_salsa", label: "Sin salsa" },
  ];

  const handleRadioPress = (value) => {
    setSelectedRadio(value);
  };

  const handleCheckboxPress = (value) => {
    setSelectedChecks((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  // Efecto para desmarcar "queso" si isQuesoDisabled es true
  useEffect(() => {
    if (isQuesoDisabled && selectedChecks["queso"]) {
      setSelectedChecks((prev) => ({
        ...prev,
        queso: false,
      }));
    }
  }, [isQuesoDisabled, selectedChecks]);

  // Efecto para notificar cambios de selección y ajustar precio si corresponde
  useEffect(() => {
    const isQuesoSelected = selectedChecks["queso"];
    const extraCost = idMenu === 1 && isQuesoSelected ? 2 : 0; // Precio adicional si aplica
    onSelectionChange(selectedRadio, selectedChecks, extraCost);
  }, [selectedRadio, selectedChecks, idMenu, onSelectionChange]);

  return {
    items,
    selectedRadio,
    selectedChecks,
    handleRadioPress,
    handleCheckboxPress,
  };
};

export default usePreparationSelection;
