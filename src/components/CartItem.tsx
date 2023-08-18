import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

import { TypeDish } from "../models/data";

const CartItem: React.FC<{
  item: TypeDish;
  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
  handleDelete: (id: string) => void;
}> = ({ item, handleIncrease, handleDecrease, handleDelete }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <p>{new Intl.NumberFormat("en-US").format(item.price)}</p>
      <div className="amount-control">
        <AiOutlinePlus onClick={() => handleIncrease(item.id)} />
        <strong>{item.quantity}</strong>
        <AiOutlineMinus onClick={() => handleDecrease(item.id)} />
      </div>
      <AiFillDelete onClick={() => handleDelete(item.id)} />
    </div>
  );
};

export default CartItem;
