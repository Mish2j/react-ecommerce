import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fetchCartData, sendCartData } from "./store/cart-actions";

import Layout from "./components/layout/Layout";
import Loader from "./components/UI/Loader";
import ModalWindow from "./components/UI/ModalWindow";
import Container from "react-bootstrap/Container";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

import {
  faHeart,
  faShoppingCart,
  faSearch,
  faUser,
  faDollarSign,
  faTruck,
  faHeadset,
  faMoneyBill,
  faArrowRight,
  faEye,
  faChevronDown,
  faChevronUp,
  faTrashAlt,
  faEnvelope,
  faMapMarkedAlt,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

// config.autoAddCss = false;
library.add(
  faHeart,
  faShoppingCart,
  faSearch,
  faUser,
  faDollarSign,
  faTruck,
  faHeadset,
  faMoneyBill,
  faArrowRight,
  faEye,
  faChevronDown,
  faChevronUp,
  faTrashAlt,
  faEnvelope,
  faMapMarkedAlt,
  faPhoneSquare,
  faFacebookF,
  faTwitter,
  faDribbble,
  faBehance
);

let isInitial = true;

const App = () => {
  const cartState = useSelector((state) => state.cart);
  const cart = { items: cartState.items, totalPrice: cartState.totalPrice };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData(cart));
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      <ModalWindow />
      <Suspense
        fallback={
          <Container className="page-loading">
            <Loader />
          </Container>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="shopping-cart" element={<ShoppingCartPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="shop/product/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="user" element={<AuthPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
