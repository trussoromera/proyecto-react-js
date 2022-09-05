import React from 'react';
import CardWidget from '../../containers/ItemListContainer/CartWidget';
import './styles.scss';

const NavBar = ({categories}) => {
return (
    <div>
        <ul>
            {
                categories.map((category,i=0) => {
                    i = i + 1;
                    return(
                        <li key={i}>
                            <a href="/#">{category}</a>
                        </li>
                    )})
                    }
            <CardWidget/>
        </ul>
    </div>
)
}

export default NavBar