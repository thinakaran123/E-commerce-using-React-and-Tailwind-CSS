import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Comments from "./components/Comments";
import Login from "./components/Login";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Add item to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const updateUserDetails = (details) => {
    setUser({ ...user, ...details });
  };

  const handleBuyNow = () => {
    setOrderPlaced(true);
    setCart([]); // Clear the cart after placing the order
  };

  return (
    <div>
      <Header user={user} />
      <Login setUser={setUser} />
      <Home addToCart={addToCart} products={products} />
      
      {/* Show the order confirmation if the order has been placed */}
      {orderPlaced ? (
        <div>
          <h2>Order placed successfully! Thank you for your purchase.</h2>
        </div>
      ) : (
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          handleBuyNow={handleBuyNow}
        />
      )}

      <Account user={user} updateUserDetails={updateUserDetails} />
      <Comments productId={1} user={user} />
    </div>
  );
}

export default App;