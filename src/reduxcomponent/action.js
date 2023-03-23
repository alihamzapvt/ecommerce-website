import {
  SELECT_PRODUCT,
  ADD_TO_CART,
  ADDTO_CART,
  REMOVE_FORM_CART,
  SELECT_PRODUCT_ADD,
} from "./constant";

export const selectproduct = (payload) => {
  return {
    type: SELECT_PRODUCT,
    payload,
  };
};

export const addtocart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const addtocartfrnt = (payload) => {
  return {
    type: ADDTO_CART,
    payload,
  };
};
export const removefromcart = (payload) => {
  return {
    type: REMOVE_FORM_CART,
    payload,
  };
};

export const selectedproduct = (payload) => {
  return {
    type: SELECT_PRODUCT_ADD,
    payload,
  };
};
