import {
  ACTIVATE_SERACHBAR,
  ADD_TO_CART,
  INA_CTIVE_SERACHBAR,
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
export const addtocart = (productImg, productName, productPrice) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productImg: productImg,
      productName: productName,
      productPrice: productPrice,
    },
  };
};
