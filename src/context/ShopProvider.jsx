//  createContext es una funcion que viene predeterminada con react
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Shop = createContext ();


// paso dos  crear el provider (proveedor) que me envuelve la aplicacion


const ShopProvider = ({children}) => {

    const [cart, setCart] = useLocalStorage('cart', []);

    const addItem = (item) =>{
        const bandera = isInCart(item.id)

        if (bandera) {
            const cartModified = cart.map(product =>{
                if (product.id === item.id){
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)

        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    const removeItem = (itemToRemove) => {
        const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = () =>{
        setCart([]);
    }

    const total = () => {
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
        return total;
    }
    
    



    

    return (
        <Shop.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider

