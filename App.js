import React from "react";
import Orders from "./src/OrdersList";
import Suppliers from "./src/SuppliersList";
import Products from "./src/ProductsList";
import CategoriesList from "./src/CategoriesList";

function App() {
  return (
    <div>
      <CategoriesList />
      <Products />
      <Suppliers />
      <Orders />
    </div>
  );
}

export default App;
