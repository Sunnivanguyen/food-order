import React from "react";
import dishes, { TypeDish } from "../models/data";
import MenuItem from "./MenuItem";

const Menu: React.FC<{
  onAddToCart: (id: string) => void;
  isOpen: boolean;
  carts: TypeDish[];
}> = ({ onAddToCart, isOpen, carts }) => {
  return (
    <main className={isOpen && carts.length > 0 ? "narrow" : ""}>
      {dishes.map((dish: TypeDish) => (
        <MenuItem key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </main>
  );
};

export default Menu;
