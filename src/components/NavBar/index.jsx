import React from 'react';
import CardWidget from '../CartWidget';
import './styles.scss';
import {Link} from 'react-router-dom';

const NavBar = ({categories}) => {
return (
    <div>
        <ul>
            {
                categories.map((category, index) => {
                    
                    return(
                    
                    <li key={index}>
                        <Link  to ={`/${category}`}>{category}</Link>
                    </li>
                    
                    )})
                    }
            <CardWidget/>
        </ul>
    </div>
)
}

export default NavBar