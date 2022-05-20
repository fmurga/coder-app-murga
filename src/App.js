
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/NavBar";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
