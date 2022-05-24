import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/NavBar";
import CartContextProvider from "./contexts/CartContextProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <div className="bg-white dark:bg-gray-800 flex flex-col h-screen justify-between">
            <NavBar />
            <AppRouter />
            <Footer />
          </div>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
