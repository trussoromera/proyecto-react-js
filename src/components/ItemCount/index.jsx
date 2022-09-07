import React, { useState, useEffect } from 'react';
import './styles.scss'

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

    }
    
    const addCart = () => {
        onAdd(contador);
        setCount (initial);
    }
    
    useEffect(()=> {
        
        console.log("Se montó el ItemCount");
    }, []);

    
    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [contador]);
    
    


    return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <h2>{contador}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount