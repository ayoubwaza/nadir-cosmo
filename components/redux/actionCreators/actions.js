import {
  ACTIVATE_SERACHBAR,
  ADD_TO_CART,
  INA_CTIVE_SERACHBAR,
  REMOVE_FROM_CART,
} from "../actionTypes";

export const activatesearchbar = () => {
  return {
    type: ACTIVATE_SERACHBAR,
  };
};
export const inactivetesearchbar = () => {
  return {
    type: INA_CTIVE_SERACHBAR,
  };
};
export const addtocart = (id, productImg, productName, productPrice) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: id,
      productImg: productImg,
      productName: productName,
      productPrice: productPrice,
    },
  };
};
export const removefromcart = (Id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: Id,
  };
};
