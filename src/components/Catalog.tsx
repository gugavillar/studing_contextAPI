import { useContext } from "react";
import { CartContext } from "../context/cart"

export function Catalog() {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <h1>Catalog</h1>
  )
}