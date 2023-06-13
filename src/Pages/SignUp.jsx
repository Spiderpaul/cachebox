import React, { useState } from "react";
import { StDiv2, StH1, SignBtn, StInput, StDivInputs } from "./CSSPages/Login";
import { TextField } from "@mui/material";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth }  from "../firebase";
import axios from "axios"
import { useDispatch } from "react-redux";
import { login, logout } from "../app/reducers/userSlice";
import { validarClave, validarCorreo, validarNombre } from "./Validations/SignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    //Redux-------------------------------------------------------------
    const dispatch = useDispatch(); 
    //Redux-------------------------------------------------------------
    //Hooks-------------------------------------------------------------
    let [name, setName] = useState({ value: '', valid: null});
    let [email, setEmail] = useState({ value: '', valid: null});
    let [password, setPassword] = useState({ value: '', valid: null});
    let [repeat, setRepeat] = useState({ value: '', valid: null});

    
    //Hooks-------------------------------------------------------------
    //Eventos-----------------------------------------------------------
    const checkUserExist = async(email) => {
        try{
            const response = await axios.get(`http://localhost:8080/usuario?correo=${email.value}`);
            
            const userExists = response.data.some((user) => user.correo === email.value);

            

            if (userExists){
                alert("El correo ya se encuentra registrado");
            }else{

                const dataUsuario = { 
                    nombre: name.value,
                    correo: email.value,
                    clave: password.value,
                }
                postDataUsuario(dataUsuario);
            }
        }catch(error){
            console.log(error);
        }
    }

    const postDataUsuario = async (dataUsuario) => {
        try{
            const response = await axios.post("http://localhost:8080/usuario", dataUsuario);
            console.log("Datos de usuario guardados: ", response.data);
            
            dispatch(login(response.data));

            navigate("/");
        }catch(error){
            console.log(error);
            dispatch(logout());
        } 
    }    

    const validation = (e) => {
        e.preventDefault();
        if(name.valid && email.valid && password.valid && repeat.valid){
            if(repeat.value === password.value){
                checkUserExist(email);
            }else{
                alert("La contraseña no coincide.");
            }
        }else{
            alert("Verifique que los datos ingresados sean correctos.")
        }
        /* email = "";
        password = "";
        repeat = ""; */
    }

    //Eventos-----------------------------------------------------------

    
    const inputStyle = {
        backgroundColor: 'white', // Aquí puedes establecer el color de fondo deseado
    }

    return (
        <StDiv2>
            <StH1>
                Ingresa tus datos
            </StH1>
            <StDivInputs>
                <TextField  InputProps={{
                    style: inputStyle,
                }}
                sx={{ mb: 1 }} label="Nombre" variant="filled" type="text" value={name.value} onChange={(input) => {
                const valueName = input.target.value;
                const validName = validarNombre(valueName);
                setName({value: valueName, valid: validName});
                }} 
                error={name.valid === false} helperText={name.valid === false && "Ingrese un nombre válido."} />
                
                <TextField InputProps={{
                    style: inputStyle,
                }}
                sx={{ mb: 1 }} label="e-mail" variant="filled" type="email" value={email.value} onChange={(input) => {
                    const valueEmail = input.target.value;
                    const validEmail = validarCorreo(valueEmail);
                    setEmail({value: valueEmail, valid: validEmail});
                }}
                error={email.valid === false} helperText={email.valid === false && "Formato esperado: usuario@dominio.com"}/>
                
                <TextField InputProps={{
                    style: inputStyle,
                }} 
                sx={{ mb: 1 }} label="Contraseña" variant="filled" type="password" value={password.value} onChange={(input) => {
                    const valuePassword = input.target.value;
                    const validPassword = validarClave(valuePassword);
                    console.log(valuePassword);
                    console.log(validPassword);
                    setPassword({value: valuePassword, valid: validPassword});
                }}
                error={password.valid === false} helperText={password.valid === false && "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 símbolo"}/>
                
                <TextField InputProps={{
                    style: inputStyle,
                }}
                sx={{ mb: 1 }} label="Repita su contraseña" variant="filled" type="password" value={repeat.value} onChange={(input) => {
                    const valueRepeat = input.target.value;
                    const validRepeat = validarClave(valueRepeat);
                    console.log(valueRepeat);
                    console.log(validRepeat);
                    setRepeat({value: valueRepeat, valid: validRepeat});
                }}
                error={repeat.valid === false} helperText={repeat.valid === false && "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 símbolo"}/>

                <SignBtn onClick={validation} type="submit">Registrarse</SignBtn>
                {/* <StLink onClick={register}>Crear una cuenta</StLink> */}
            </StDivInputs>
        </StDiv2>
    )
}

export default SignUp