import React from 'react';
import './styles.scss';
import { useState } from 'react';

export default function App(){
    const[cantidad, setCantidad] =useState(0);
    const[fecha, setFecha] = useState("");

    const eventClick = (e) => {
        setCantidad(cantidad + 1);
        setFecha(new Date().toLocaleString);
    }
    return
    <>
    
    </>





}