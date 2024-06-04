import { useState } from "react";
import Header from "./components/Layout/Header.js"
import MealsContainer from "./components/Meals/MealsContainer.js";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [open, setOpen]= useState(false)
  const handleOpenCart=()=>{
      setOpen(true)
  }
  const handleCloseCart=()=>{
      setOpen(false)
  }
  return (  
        <CartProvider>
        {open &&
        <Cart isOpen={open} setIsClose={handleCloseCart} />
        }
        <Header setIsOpen={handleOpenCart}/>
        <main>
          <MealsContainer/>
        </main>
        </CartProvider>
  );
}

export default App;
