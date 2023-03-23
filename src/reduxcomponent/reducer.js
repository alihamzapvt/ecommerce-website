import {
  ADD_TO_CART,
  REMOVE_FORM_CART,
  SELECT_PRODUCT_ADD,
  ADDTO_CART,
} from "./constant";

const inisialstate = {
  selectproduct: [],
};

const selectitemadd = (state = inisialstate, { type, payload }) => {
  switch (type) {
    case ADDTO_CART:
      return {
        ...state,
        selectproduct: payload,
      };
    default:
      return state;
  }
};

const productselect = (state = inisialstate, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const itemIndex = state.selectproduct.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      if (itemIndex > -1) {
        return state;
      }
      return {
        ...state,
        selectproduct: [...state.selectproduct, payload],
      };
    case REMOVE_FORM_CART:
      return {
        ...state,
        selectproduct: state.selectproduct.filter(
          (item) => item.id !== payload.id
        ),
      };
    case SELECT_PRODUCT_ADD:
      const itemIndexR = state.selectproduct.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      if (itemIndexR > -1) {
        return state;
      }
      return {
        ...state,
        selectproduct: [...state.selectproduct, payload],
      };
    default:
      return state;
  }
};

export { productselect, selectitemadd };
