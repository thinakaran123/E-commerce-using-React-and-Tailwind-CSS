import React, { useState } from "react";

function ShoppingCart({ cartItems = [], removeFromCart, updateQuantity }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Function to handle "Buy Now" click
  const handleBuyNow = () => {
    setOrderPlaced(true); // Mark the order as placed
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {orderPlaced ? (
        <div className="text-green-500 font-semibold text-xl">
          <p>Order placed successfully! Thank you for your purchase.</p>
        </div>
      ) : (
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Add some products to your cart.</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between mb-4">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <span className="ml-4">{item.name}</span>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between">
                <p className="text-xl font-semibold">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                <button
                  onClick={handleBuyNow}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
