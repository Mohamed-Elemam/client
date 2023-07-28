import { useState, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(
    ()=>{  const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : []}
  );

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Save cart data to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Retrieve cart data from localStorage when the hook is initialized
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  return { cartItems, addToCart, clearCart };
};
