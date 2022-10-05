import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.scss';
import { Shop } from "../../context/ShopProvider";

const ItemDetail = ({ product }) => {

  const [qty, setQty] = useState(0);
  
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {

    setQty(quantity);
  };
  
  const handleFinish = () => {
    const productToSave ={...product,quantity: qty}
    addItem(productToSave)
    navigate ('/cart')

  }

  return (
    <div className='padre'>

      <div>
        <img className='img-detail' src={product.image} />
      </div>

      <div className='container-descrip'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {!qty ? <ItemCount stock={product.stock} initial={1} onAdd=
          {addCart} /> : <button onClick={handleFinish}>Finalizar compra</button>}
      </div>

    </div>
  )
}

export default ItemDetail