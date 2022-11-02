import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route,Routes } from "react-router-dom";
import ProductListing from "./component/product/ProductListing";
import ProductDetails from "./component/product/ProductDetails";
import AddNewProduct from "./component/product/AddNewProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<ProductListing />} />
          <Route path="/product/:productId"  element={<ProductDetails />} />
          <Route path="/product/:productId"  element={<ProductDetails />} />
          <Route path="/add-new-product"  element={<AddNewProduct />} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
