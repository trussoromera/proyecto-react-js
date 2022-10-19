// import ItemCount from "./components/ItemCount";
import './styles.scss';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from "./containers/ItemListContainer";
import Cart from './containers/CartContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import ShopProvider from './context/ShopProvider';
// import { useEffect } from 'react';
// import algoritmoGuardadoAutomático from './services/guardarProductos';




function App() {

  // useEffect(()=>{
  //   console.log("se deberia ejecutar una sola vez")
  //   algoritmoGuardadoAutomático()
  // }, []) 
  
  
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          {/* todo lo que viene despues de : va a ser dinamicamente */}
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </ShopProvider>
    
  );
}

export default App;
