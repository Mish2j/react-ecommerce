import useJson from "../hooks/use-json";
import { productActions } from "./product-slice";
import { modalActions } from "./modal-slice";
import { FIREBASE_DOMAIN, DATA_NOT_FOUND_ERROR } from "../config";

export const fetchProductData = () => {
  return (dispatch) => {
    const getProducts = async () => {
      try {
        dispatch(productActions.toggleLoading());

        const products = await useJson(`${FIREBASE_DOMAIN}products.json`);

        dispatch(productActions.setProducts(products));
      } catch (error) {
        dispatch(
          modalActions.openModal({ title: "Error", message: error.message })
        );
      } finally {
        dispatch(productActions.toggleLoading());
      }
    };

    getProducts();
  };
};

export const getProductInfo = (productId) => {
  return (dispatch) => {
    const getProductDetail = async () => {
      try {
        dispatch(productActions.toggleLoading());

        const productsData = await useJson(`${FIREBASE_DOMAIN}products.json`);

        const filteredProduct = productsData.find(
          (item) => item.id === productId
        );

        if (!filteredProduct) throw new Error(DATA_NOT_FOUND_ERROR);

        dispatch(productActions.setProductInfo(filteredProduct));
      } catch (error) {
        dispatch(
          modalActions.openModal({ title: "Error", message: error.message })
        );
      } finally {
        dispatch(productActions.toggleLoading());
      }
    };

    getProductDetail();
  };
};
