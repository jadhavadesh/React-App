import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsAction";
import ProductComponent from "../product/ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("");
  console.log(activeItem);
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchByCategory = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${activeItem}`)
      .catch((error) => {
        console.log("Error", error);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    if (activeItem && activeItem !== "") {
      fetchByCategory();
    }
  }, [activeItem]);
  return (
    <div className="ui grid container">
      <div className="ui container right" style={{ marginTop: "20px" }}>
        <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item
              name="All"
              active={activeItem === "All"}
              onClick={() => {
                fetchProducts();
                // fetchByCategory();
              }}
            />
            <Menu.Item
              name="electronics"
              active={activeItem === "electronics"}
              onClick={(e, { name }) => {
                setActiveItem(name);
                // fetchByCategory();
              }}
            />
            <Menu.Item
              name="jewelery"
              active={activeItem === "jewelery"}
              onClick={(e, { name }) => {
                setActiveItem(name);
                // fetchByCategory();
              }}
            />
            <Menu.Item
              name="men's clothing"
              active={activeItem === "men's clothing"}
              onClick={(e, { name }) => {
                setActiveItem(name);
                // fetchByCategory();
              }}
            />

            <Menu.Item
              name="women's clothing"
              active={activeItem === "women's clothing"}
              onClick={(e, { name }) => {
                setActiveItem(name);
                // fetchByCategory();
              }}
            />
          </Menu.Menu>
        </Menu>
      </div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
