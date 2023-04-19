export const initialState = {
  basket: []
}

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM"
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":

      const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
      let newasket = [...state.basket];

      if (index >= 0) {
        newasket.splice(index, 1)
      } else { console.log("Producto No encontrado"); }

      return {
        ...state,
        basket: newasket,
      }

    default:
      return state;
  }
};

export default reducer;
