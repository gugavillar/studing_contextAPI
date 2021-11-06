import { useContext } from "react";
import { CartContext, Product } from "../context/cart";

interface ProductItem {
  product: Product;
}

export function CatalogItem({ product }: ProductItem) {
  const { addProductToCart, failedStockItems } = useContext(CartContext);

  function handleProductToCart() {
    addProductToCart(product);
  }

  const hasFailedItem = failedStockItems.includes(product.id);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{(product.price).toFixed(2)}</span> {" - "}
      <button onClick={handleProductToCart}>Comprar</button> {" - "}
      {hasFailedItem && <span>Fora de estoque</span>}
    </article>
  )
}