import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/actions/productsAction";

const ProductComponent = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  // const { is, title } = products[0];

  const renderList = products.map((product) => {
    const { id, title, category, image, price } = product;
    return (
      <div className="four columns wide" style={{ marginTop: "30px" }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
