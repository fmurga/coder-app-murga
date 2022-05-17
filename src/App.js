import ItemListContainer from './components/Product/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/Product/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Trending"} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
