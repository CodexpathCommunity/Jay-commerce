import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Products, Cart } from "./Components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setcartItems] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce?.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const fetchCartItems = async () => {
    setcartItems(await cart.line_items);
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCartItems();
  }, []);

  console.log(cartItems);
  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Cart cart={cartItems} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
    </>
  );
};

export default App;
