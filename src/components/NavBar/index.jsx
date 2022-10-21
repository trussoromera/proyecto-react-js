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
                <Link to="/category/kitesurf">Kitesurf</Link>
            </li>
            <li>
                <Link to="/category/windsurf">Windsurf</Link>
            </li>
            <li>
                <Link to="/category/snowboard">Snowboard</Link>
            </li>
            <li>
                <Link to="/category/wingfoil">WingFoil</Link>
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
                <CartWidget/> 
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