import React from 'react';
import './styles.scss';
import { BsFillCartCheckFill } from 'react-icons/bs';

const CardWidget = () => {
return (
    <div style={{
        position: 'absolute',
        right: '20px',
        top: '5px'
    }}>
        <BsFillCartCheckFill color='white' size={35}/>
    </div>
)
}

export default CardWidget
