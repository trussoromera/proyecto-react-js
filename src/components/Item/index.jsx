import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <h3>{product.nombre}</h3>
        
        <p>{product.precio}</p>
        
    </div>
  )
}


export default Item