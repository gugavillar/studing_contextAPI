import React from 'react';
import { Catalog } from './components/Catalog';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <Catalog />
    </CartProvider>
  );
}

export default App;
