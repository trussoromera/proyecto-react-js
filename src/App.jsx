// import ItemCount from "./components/ItemCount";
import './styles.scss';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from "./containers/ItemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';

// import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const categorias = ["Home" ,"Men's clothing" , "Women's clothing" , "Electronics" , "Jewelery"];
  

  
  return (
    <BrowserRouter>
      <NavBar categories={categorias}/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        {/* todo lo que viene despues de : va a ser dinamicamente */}
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
