import React from "react";
import CartWidget from "../CartWidget";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import AuthContainer from "../../containers/AuthContainer";




const NavBar = () => {
    

    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);




    const handleLogin = () => {
        setLoginModal(true);
    };

    const handleSignup = ()=> {
        setSignupModal(true);
    }


return (
    <>
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
            <div className="buttons-container">
                    <Button
                        size="medium"
                        variant="outlined"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                </div>
                <CartWidget />
                
            </ul>
            {(loginModal || signupModal) && (
                    <AuthContainer
                        handleClose={() => {
                            setLoginModal(false);
                            setSignupModal(false);
                        }}
                        login={loginModal}
                        signUp={signupModal}
                    />
                )}

        </>
    
)
}

export default NavBar