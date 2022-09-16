import React from 'react';
import './styles.scss';
import {useNavigate} from 'react-router-dom';
import ItemCount from '../ItemCount'

//Corresponde a la card del producto
const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
      <img className="card-img" src={product.image} width={250} height={250} alt="product"/>
      <h1 className='card-title'>{product.title}</h1>
      <ItemCount stock={5} initial={1} onAdd={console.log}/>
    </div>
  )
}

export default Item