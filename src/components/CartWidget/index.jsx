import React from 'react';
import './styles.scss';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';





const CardWidget = () => {
    
    const navigate = useNavigate();

    const navegando = () =>{
        navigate('/cart')
    }


return (
    <div style={{
        position: 'absolute',
        right: '20px',
        top: '5px'
    }}>
        <BsFillCartCheckFill className='carrito-pointer' color='white' size={35} onClick={navegando} />
        
    </div>
)
}

export default CardWidget
