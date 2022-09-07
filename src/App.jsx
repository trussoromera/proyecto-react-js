import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const categorias = ["Home" , "Kitesurf" , "Windsurf" , "Nosotros"];

  
  return (
    <>
    <NavBar
    categories={categorias}
    />
    <ItemListContainer greeting={"Bienvenidos a nuestro Ecommerce"}/>
    
    </>
  )
}

export default App;
