import Header from "./components/Layout/Header.js"
import MealsContainer from "./components/Meals/MealsContainer.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  return (  
        <>
        <Cart />
        <Header />
        <main>
          <MealsContainer/>
        </main>
        </>
  );
}

export default App;
