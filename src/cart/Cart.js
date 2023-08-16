import React from "react";
import { useCartContext } from "./cartContext";
import { FaTimes, FaShoppingCart, FaArrowLeft, FaCartArrowDown } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCartContext();

  return (
    <li className="flex justify-between items-center mb-2">
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
};

const Cart = ({ closeCart }) => {
  const { cartItems } = useCartContext();

  return (
    <div className="fixed top-0 right-0 h-full bg-white w-1/3 p-4 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Cart</h2>
        <button onClick={closeCart} className="text-2xl">
          <FaTimes />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <FaShoppingCart className="text-5xl mb-4" />
          <p className="text-gray-600">Your cart is empty.</p>
          <button className="bg-sky-500 text-white px-4 py-2 mt-4" onClick={closeCart}>
            Return to Shop
          </button>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
