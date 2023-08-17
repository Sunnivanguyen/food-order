import React from "react";
import CartItem from "./CartItem";

type DishType = {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity: number;
};

const Cart: React.FC<{
  carts: DishType[];
  onOpenCart: () => void;
  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
  handleDelete: (id: string) => void;
}> = ({ carts, onOpenCart, handleIncrease, handleDecrease, handleDelete }) => {
  const totalPrice = carts.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart">
        {carts.map((item) => (
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
        <div>{totalPrice}</div>
        <button onClick={onOpenCart}>Close</button>
      </footer>
    </div>
  );
};

export default Cart;
