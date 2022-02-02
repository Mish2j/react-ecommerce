import useJson from "../hooks/use-json";
import { useSelector } from "react-redux";
import { cartActions } from "./cart-slice";

import { FIREBASE_DOMAIN, REQUEST_ERROR } from "../config";
import { modalActions } from "./modal-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      try {
        dispatch(cartActions.toggleLoader());

        const cartData = await useJson(`${FIREBASE_DOMAIN}cart.json`);

        dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalPrice: cartData.totalPrice,
          })
        );
      } catch (error) {
        dispatch(
          modalActions.openModal({ title: "Error", message: error.message })
        );
      } finally {
        dispatch(cartActions.toggleLoader());
      }
    };

    fetchData();
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendCartData = async () => {
      try {
        const response = await fetch(`${FIREBASE_DOMAIN}cart.json`, {
          method: "PUT",
          body: JSON.stringify(cart),
        });

        if (!response.ok) throw new Error(REQUEST_ERROR);
      } catch (error) {
        console.log(error);
        dispatch(
          modalActions.openModal({ title: "Error", message: error.message })
        );
      }
    };

    sendCartData();
  };
};

export const getCartItemQuantity = (itemId) => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemInCart = cartItems.find((cartItem) => cartItem.id === itemId);

  if (!itemInCart) return;

  return itemInCart.quantity;
};
