import users from './users-data';
export const initialState = {
  basket: [],
  user: users,
  login: null
}

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  LOGIN: "LOGIN",
  OUTLOGIN: "OUTLOGIN",
  FULLORDER: "FULLORDER"
}

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action) => {

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
    case "SET_USER":

      const updatedUsers = [...state.user, ...action.item];
      return { ...state, user: updatedUsers };

    case "LOGIN":
      return { ...state, login: action.item };

    case "OUTLOGIN":
      return { 
        ...state, 
        //basket: action.basket,
        login: action.login
       };
    case "FULLORDER":
      return { 
        ...state, 
        basket: action.basket,
       };

    default:
      return state;
  }
};

export default reducer;
