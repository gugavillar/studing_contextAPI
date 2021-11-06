import { useContext, useEffect, useState } from "react";
import { CartContext, Product } from "../context/cart"
import { api } from "../services/api";

export function Catalog() {
  const { items } = useContext(CartContext);
  const [catalog, setCatalog] = useState<Product[]>([]);
  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);
  console.log(catalog);

  return (
    <h1>Catalog</h1>
  )
}