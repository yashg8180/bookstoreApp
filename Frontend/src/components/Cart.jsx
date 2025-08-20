import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <h2 className="text-center text-2xl mt-10">Your cart is empty!</h2>;
  }

  const totalPrice = cartItems.reduce((total, book) => total + book.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.map((book, index) => (
        <div key={index} className="flex items-center border-b pb-4 mb-4">
          <img src={book.image || "/default-book.png"} alt={book.name} className="w-20 h-28 object-cover mr-4" />
          <div className="flex-grow">
            <h2 className="text-xl">{book.name}</h2>
            <p className="text-sm text-gray-600">{book.category}</p>
            <p className="text-lg font-bold">${book.price}</p>
          </div>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 duration-300"
            onClick={() => removeFromCart(book)}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="text-2xl font-semibold mt-4">Total: ${totalPrice}</h3>
      <button
        className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
