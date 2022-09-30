import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import Item from '../Item'
import './styles.scss'

const ItemList = ({products}) => {

  

  return (
    <div className='item-config'>
        {products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        }
        
    </div>
  )
}

export default ItemList