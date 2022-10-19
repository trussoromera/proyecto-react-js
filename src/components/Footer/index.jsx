import React from 'react';
import './styles.scss';
import { BsInstagram,BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer class="footer-config text-center">
        <div class="redes-soc">
            <BsInstagram color='white' padding='20px'/>
            <BsFacebook color='white'/>
            <BsTwitter color='white'/>
            <BsWhatsapp color='white'/>
        </div>
    </footer>
  )
}

export default Footer