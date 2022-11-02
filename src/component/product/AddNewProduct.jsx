import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function AddNewProduct() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  const router = useNavigate();

  const options = {
    method: "POST",
    url: "https://fakestoreapi.com/products",
    params: {
      ids: "3IBcauSj5M2A6lTeffJzdv",
    },
    headers: {
      "X-RapidAPI-Key": "1926926a16mshee60c08d39ab0bbp1ed6a8jsn367a2d47b002",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  const addProduct = async (data) => {
    setData(data);
    const response = await axios
      .post("https://fakestoreapi.com/products", {
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(response);
    alert("Product Added Successfully");
    router("/");
  };
  return (
    <>
      <div className="ui container" style={{ marginTop: "50px" }}>
        <form
          class="ui form"
          onSubmit={handleSubmit((data) => addProduct(data))}
        >
          <h4 class="ui dividing header">Add New Product</h4>
          <div class="field">
            <label>Title</label>
            <div class="two fields">
              <div class="field">
                <input
                  {...register("title")}
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                />
              </div>
            </div>
          </div>
          <div class="field">
            <label>Price</label>
            <div class=" two fields">
              <div class="field">
                <input
                  {...register("price")}
                  type="text"
                  name="price"
                  placeholder="Enter Price"
                />
              </div>
            </div>
          </div>
          <div class="two fields">
            <div class="field">
              <label>Category</label>
              <select class="ui fluid dropdown" {...register("category")}>
                <option value="electronic">electronic</option>
                <option value="jewelery">jewelery</option>
                <option value="men">men's clothing</option>
                <option value="women">women's clothing</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>Image URL</label>
            <div class=" two fields">
              <div class="field">
                <input
                  {...register("image")}
                  type="text"
                  name="image"
                  placeholder="Enter image URL"
                />
              </div>
            </div>
          </div>
          <div class="field">
            <label>Description</label>
            <div class=" two fields">
              <div class="field">
                <input
                  {...register("desc")}
                  type="text"
                  name="desc"
                  placeholder="Enter descL"
                />
              </div>
            </div>
          </div>
          <Button class="ui button" type="submit">
            Add Product
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddNewProduct;
