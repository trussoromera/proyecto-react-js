import React from 'react';
import CardWidget from '../CartWidget';
import './styles.scss';
import {Link} from 'react-router-dom';

const NavBar = ({categories}) => {
return (
    
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
            <CardWidget/>
        </ul>
    
)
}

export default NavBar