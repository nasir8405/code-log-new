import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import ProductsPage from "./Pages/Products";
import ShoppingPage from "./Pages/Shopping";
function App() {
  // const [count, setCount] = useState(0);
  // const inc = () => {
  //   setCount(count + 1);
  // };
  // const des = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  return (
    <div className="App container">
      <Navigation />
      <Routes>
        {/* <Route
          path="/products"
          element={
            <ProductsPage count={count} handleInc={inc} handleDec={des} />
          }
        />
        <Route path="/shopping" element={<ShoppingPage count={count} />} /> */}

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
    </div>
  );
}

export default App;
