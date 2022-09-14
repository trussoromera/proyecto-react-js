import React from 'react'
import ItemCount from '../ItemCount'
import './styles.scss'

const Item = ({product}) => {
  return (
  
  <div className='contenedor'>
    <img src={product.image} width={250}/>
    <h3>{product.title}</h3>
    <ItemCount stock={5} initial={1} onAdd={console.log}/>
  </div>
  
  )
}


export default Item