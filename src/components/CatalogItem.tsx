import { Product } from "../context/cart";

interface ProductItem {
  product: Product;
}

export function CatalogItem({ product }: ProductItem) {
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{(product.price).toFixed(2)}</span> {" - "}
      <button>Comprar</button>
    </article>
  )
}