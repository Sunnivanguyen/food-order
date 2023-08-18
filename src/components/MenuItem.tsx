import React from "react";
import { TypeDish } from "../models/data";

const MenuItem: React.FC<{
  dish: TypeDish;
  onAddToCart: (id: string) => void;
}> = ({ dish, onAddToCart }) => {
  return (
    <div className="item-container">
      <img src={dish.image} alt={dish.name} />
      <em>{dish.name.toUpperCase()}</em>
      <p>{new Intl.NumberFormat("en-US").format(dish.price)}</p>
      <button className="btn-add__cart" onClick={() => onAddToCart(dish.id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
