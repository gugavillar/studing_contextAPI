import React from 'react';
import { Catalog } from './components/Catalog';
import { TableCatalog } from './components/TableCatalog';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <Catalog />
      <TableCatalog />
    </CartProvider>
  );
}

export default App;
