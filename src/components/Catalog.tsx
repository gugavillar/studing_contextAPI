import { useContext, useEffect, useState } from "react";
import { CartContext, Product } from "../context/cart"
import { api } from "../services/api";
import { CatalogItem } from "./CatalogItem";

export function Catalog() {
  const { items } = useContext(CartContext);
  const [catalog, setCatalog] = useState<Product[]>([]);
  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}