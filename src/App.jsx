import ItemCount from "./components/ItemCount";
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
    <ItemCount stock={5} initial={1} onAdd={console.log}/>
    </>
  )
}

export default App;
