import React from "react";
import CartItem from "./CartItem";
import { TypeDish } from "../models/data";

const Cart: React.FC<{
  carts: TypeDish[];
  onOpenCart: () => void;
  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
  handleDelete: (id: string) => void;
}> = ({ carts, onOpenCart, handleIncrease, handleDecrease, handleDelete }) => {
  const totalPrice = carts.reduce(
    (accumulator, item) =>
      item.quantity ? accumulator + item.price * item.quantity : 0,
    0
  );

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart">
        {carts.map((item: TypeDish) => (
          <CartItem
            key={item.id}
            item={item}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <footer className="footer-cart">
        <div>{new Intl.NumberFormat("en-US").format(totalPrice)}</div>
        <button onClick={onOpenCart}>Close</button>
      </footer>
    </div>
  );
};

export default Cart;
