import React, { useState } from "react";
import Logo from "../assets/CacheBox.png"
import {Div, StImg, LoginBtn, StDiv, StH1, SignBtn, StDiv2, StLink} from "./CSSPages/Login"
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Login = () => {
    //Hooks-------------------------------------------------------------
    const [signUp, setSignUp] = useState(false);
    const [login, setLogin] = useState(false);
    
    const clickSignUp = () => {
        setSignUp(true);
    }
    const clickLogin = () => {
        setLogin(true);
    }
    const register = () => {
        setSignUp(true);
        setLogin(false);
    }
    //Hooks-------------------------------------------------------------
    return (
        <Div> 
            <StImg src={Logo} alt="Logo"/>
            { !login && <LoginBtn onClick={clickLogin}>Iniciar sesión</LoginBtn>}
            <StDiv>
                { !login ? 
                    (signUp ? (<SignUp />) : (
                        <StDiv2>
                            <StH1>Si no estás registrado, puedes crear una cuenta con cualquier correo electrónico.</StH1>
                            <StH1>Recuerda que puedes eliminar tu cuenta en cualquier momento</StH1>
                            <SignBtn onClick={clickSignUp}>Regístrate</SignBtn>
                        </StDiv2>))
                    : (<StDiv2>
                        <SignIn signUp={clickSignUp} />
                        <StLink onClick={register}>Crear una cuenta</StLink>
                      </StDiv2>)
                }
            </StDiv>
        </Div>
    )
}

export default Login