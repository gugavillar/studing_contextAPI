import { createContext, ReactNode, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ICartItem {
  product: Product;
  quantity: number;
}

interface CartContextData {
  items: ICartItem[];
  addProductToCart: (product: Product) => void;
  // failedStockItems: [];
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function addProductToCart(product: Product) {
    console.log(product);
  }

  return (
    <CartContext.Provider value={{ items, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}