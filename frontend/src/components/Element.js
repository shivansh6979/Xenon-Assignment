import React from "react";
import "./Element.css";
import Rating from "./Rating";

const Element = ({ product }) => {
  return (
    <div className="cards">
      <a href={`/product/${product.id}`}>
        <img src={product.image} className="image" alt={product.title} />
      </a>

      <div className="cards-body">
        <a href={`/product/${product.id}`} className="title">
          <strong>{product.title}</strong>
        </a>

        <div className="rating">
          <Rating
            value={product?.rating?.rate}
            text={`${product?.rating?.count} reviews`}
            color="#B2FFFF"
          />
        </div>

        <h3 className="price">${product.price}</h3>
      </div>
    </div>
  );
};

export default Element;
