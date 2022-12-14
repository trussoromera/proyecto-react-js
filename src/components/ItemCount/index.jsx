import React, { useState, useEffect } from 'react';
import './styles.scss'


// cada hook que utilicemos hay que importarlo

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setCount] = useState(initial)

    const handleAdd = () => {
        if (contador < stock) {
            setCount (contador + 1)
        }
        else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        
        if (contador <= 1){
            alert("1 es el minimo");
        }
        else{
        setCount(contador - 1)
    }
        

    }
    
    const addCart = () => {
        onAdd(contador);
        setCount (initial);
        
    }
    //Montaje del componente
    useEffect(()=> {
        //El array de dependencias vacío implica que el callback se ejecutará cuando se MONTA el componente por UNICA vez.
        
    }, []);

    //  La funcion callback dentro del useEffect se ejecutara cuando se MONTE el componente, y cuando se ACTUALICE el valor del contador.
    useEffect(()=> {
        
    }, [contador]);
    
    return (
    <div className='alineador'>
        <h2>{contador}</h2>
        <button onClick={handleDecrement}>-</button>
        <button onClick={addCart}>Agregar al carrito</button>
        <button onClick={handleAdd}>+</button>
    </div>
    );
};

export default ItemCount