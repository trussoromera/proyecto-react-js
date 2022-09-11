import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <h3>{product.nombre}</h3>
        <img src="" alt="" />
        <p>{product.precio}</p>
        <a href=""></a>
    </div>
  )
}

export default Item