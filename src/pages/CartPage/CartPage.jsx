import { useContext } from "react";
import { Api1Context } from "../../common/context/api1-context";
import { CartContainer } from "./styled.CartPage";
import Cart from "./../../components/Cart";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
export default function CartPage() {
  const { cart } = useContext(Api1Context);
  return <CartContainer>{cart[0] ? <Cart /> : <EmptyCart />}</CartContainer>;
}
