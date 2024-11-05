import { useMemo } from "react";

const useFilteredIngredients = (menuId) => {
  const ingredients = [
    {
      id: 1,
      value: "pollo",
      label: "Pollo",
      lista_de_menu: [1, 2, 4],
      isSelected: false,
    },
    {
      id: 2,
      value: "picadillo",
      label: "Picadillo",
      lista_de_menu: [1, 2, 4],
      isSelected: false,
    },
    {
      id: 3,
      value: "champiñones",
      label: "Champiñones",
      lista_de_menu: [1],
      isSelected: false,
    },
    {
      id: 4,
      value: "flor de calabaza",
      label: "Flor de Calabaza",
      lista_de_menu: [1],
      isSelected: false,
    },
    {
      id: 5,
      value: "chicharron",
      label: "Chicharrón",
      lista_de_menu: [1, 5],
      isSelected: false,
    },
    {
      id: 6,
      value: "queso",
      label: "Queso",
      lista_de_menu: [1],
      isSelected: false,
    },
    {
      id: 7,
      value: "carne",
      label: "Carne",
      lista_de_menu: [1, 2],
      isSelected: false,
    },
    {
      id: 8,
      value: "papa",
      label: "Papa",
      lista_de_menu: [1, 3],
      isSelected: false,
    },
    {
      id: 9,
      value: "panza",
      label: "Panza",
      lista_de_menu: [1, 4],
      isSelected: false,
    },
    {
      id: 10,
      value: "pata",
      label: "Pata",
      lista_de_menu: [2],
      isSelected: false,
    },
    {
      id: 11,
      value: "coca",
      label: "Coca",
      lista_de_menu: [6],
      isSelected: false,
    },
    {
      id: 12,
      value: "limon",
      label: "Limón",
      lista_de_menu: [6],
      isSelected: false,
    },
    {
      id: 13,
      value: "mandarina",
      label: "Mandarina",
      lista_de_menu: [6],
      isSelected: false,
    },
  ];

  // Filtra los ingredientes según el ID del menú proporcionado
  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) =>
      ingredient.lista_de_menu.includes(menuId)
    );
  }, [menuId]);

  return filteredIngredients;
};

export default useFilteredIngredients;
