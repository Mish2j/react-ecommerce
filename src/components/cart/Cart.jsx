import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Loader from "../UI/Loader";
import NoProduct from "../UI/NoProduct";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isLoading = useSelector((state) => state.cart.isLoading);

  if (isLoading) {
    return <Loader />;
  }

  if (!cartItems || cartItems.length === 0)
    return <NoProduct text="Your shopping cart is empty." />;

  const items = cartItems.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return items;
};

export default Cart;
