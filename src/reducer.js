import users from './users-data';
import products from './product-data';
import { type } from '@testing-library/user-event/dist/type';

export const initialState = {
  basket: [],
  user: users,
  login: null,
  produ: products,
  showUpProdu: []
}

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  LOGIN: "LOGIN",
  OUTLOGIN: "OUTLOGIN",
  FULLORDER: "FULLORDER",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  OPEN_MODAL_EDIT_PRODUCT: "OPEN_MODAL_EDIT_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT"
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

    case "DELETE_PRODUCT":
      const productIndex = state.produ.findIndex((product) => product.id === action.products);
      const updatedProduct = { ...state.produ[productIndex], state: 0 };
      const updatedProducts = [...state.produ];
      updatedProducts[productIndex] = updatedProduct;
      return { ...state, produ: updatedProducts };

    case "OPEN_MODAL_EDIT_PRODUCT":
      return { ...state, showUpProdu: action.product }


    case "EDIT_PRODUCT":

    if (action.product.id === "undefined") {
      //CREATE PRODUCT
      console.log(action.product.id);
      
    }

    //EDIT PRODUCT
      const prodIndex = state.produ.findIndex((product) => product.id === parseInt(action.product.id));
      const updProduct = { ...state.produ[prodIndex], name:action.product.name, productType: action.product.productType, price:action.product.price, rating:parseInt(action.product.rating), imagen:action.product.imagen, description:action.product.description, state:action.product.state };
      const updProducts = [...state.produ];
      updProducts[prodIndex] = updProduct;
      return { ...state, produ: updProducts }; 
 
    default:
      return state;
  }
};

export default reducer;
