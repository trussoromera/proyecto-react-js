import React from 'react';
import './styles.scss';
import {useNavigate} from 'react-router-dom';


//Corresponde a la card del producto
const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
      <img className="card-img" src={product.image} width={250} height={300} alt="product"/>
      <h1 className='card-title'>{product.title}</h1>
      <h2>${product.price}</h2>
    </div>
  )
}

export default Item