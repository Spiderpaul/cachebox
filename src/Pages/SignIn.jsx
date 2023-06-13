import React, { useState } from "react";
import { StDiv2, StH1, SignBtn, StInput, StDivInputs } from "./CSSPages/Login";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth }  from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../app/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { validarCorreo, validarClave } from "./Validations/SignUp";

const SignIn = () => {
    //Redux-------------------------------------------------------------
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Redux-------------------------------------------------------------
    //Hooks-------------------------------------------------------------
    const [email, setEmail] = useState({value: '', valid: null});
    const [password, setPassword] = useState({value: '', valid: null});
    
    //Hooks-------------------------------------------------------------

    const checkUserExist = async (email, password) => {
        try{
            const responseMail = await axios.get(`http://localhost:8080/usuario?correo=${email.value}`);
            const user = responseMail.data.find((user) => user.correo === email.value);
            
            if(user && user.clave === password.value){
                dispatch(login(user));
                navigate("/");
            }else{
                alert("Usuario no encontrado.");
                dispatch(logout);
                navigate("/login");
            }
        }catch(error){
            console.log(error);
        }
        

    };

    //Eventos-----------------------------------------------------------
    const validation = (e) => {
        e.preventDefault();

        if(email.valid && password.valid){
            checkUserExist(email, password);
        }else{
            alert("Verifique que los datos ingresados sean correctos.")
        }


        /* PARA VALIDAR USUARIO DESDE FIREBASE
            signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => navigate("/"))
            .catch((err) => alert(err.message)); */
    }
    
    //Eventos-----------------------------------------------------------

    const inputStyle = {
        backgroundColor: "white",        
    }
    
    return (
        <StDiv2>
            <StH1>
                Ingresa tus datos
            </StH1>
            <StDivInputs>
                <TextField inputProps={{
                    style: inputStyle,
                }} 
                sx={{ mb: 1 }} label="email" variant="filled" type="email" value={email.value} onChange={(input) => {
                    const valueEmail = input.target.value;
                    const validEmail = validarCorreo(valueEmail);
                    setEmail({value: valueEmail, valid: validEmail});
                }}
                error={email.valid === false} helperText={email.valid === false && "Formato esperado: usuario@dominio.com"}/>
                
                <TextField inputProps={{
                    style: inputStyle,
                }} 
                sx={{ mb: 1 }} label="Contraseña" variant="filled" type="password" value={password.value} onChange={(input) => {
                    const valuePassword = input.target.value;
                    const validPassword = validarClave(valuePassword);
                    setPassword({value: valuePassword, valid: validPassword});
                }}
                error={password.valid === false} helperText={password.valid === false && "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 símbolo"}/>
                <SignBtn onClick={validation} type="submit">Iniciar sesión</SignBtn>
            </StDivInputs>
        </StDiv2>
    )
}

export default SignIn