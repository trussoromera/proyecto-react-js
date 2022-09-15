import React from 'react'
import ItemCount from '../ItemCount'
import './styles.scss'

const ItemDetail = ({product}) => {
  return (
    <div className='padre'>

      <div>
        <img className='img-detail' src={product.image}/>
      </div>

      <div className='container-descrip'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <ItemCount stock={5} initial={1} onAdd={console.log}/>
      </div>

    </div>
  )
}

export default ItemDetail