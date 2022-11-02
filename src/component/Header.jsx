import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Input } from "semantic-ui-react";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Fake Shop</h2>
        </div>
        <Link to={"/add-new-product"}>
          <button class="ui primary button">Add New Product</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
