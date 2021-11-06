import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
export interface Product {
  id: number;
  title: string;
  price: number;
}

interface ICartItem {
  product: Product;
  quantity: number;
}

interface StockResponse {
  id: number;
  quantity: number;
}

interface CartContextData {
  items: ICartItem[];
  addProductToCart: (product: Product) => void;
  failedStockItems: Number[];
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [failedStockItems, setFailedStockItems] = useState<Number[]>([]);

  async function addProductToCart(product: Product) {
    const updateCart = [...items];
    const productIndexCart = updateCart.findIndex(item => item.product.id === product.id);
    const currentQuantity = items.find(item => item.product.id === product.id)?.quantity ?? 0;
    const isStockAvailable: StockResponse = await api.get(`stock/${product.id}`).then(response => response.data);

    if (isStockAvailable.quantity > currentQuantity) {
      if (productIndexCart >= 0) {
        updateCart[productIndexCart].quantity++;
      } else {
        updateCart.push({
          product, quantity: 1
        });
      }
      setItems(updateCart);
    } else {
      const updateFailedStockItems = [...failedStockItems];
      updateFailedStockItems.push(product.id);
      setFailedStockItems(updateFailedStockItems);
    }
  }

  return (
    <CartContext.Provider value={{ items, addProductToCart, failedStockItems }}>
      {children}
    </CartContext.Provider>
  )
}