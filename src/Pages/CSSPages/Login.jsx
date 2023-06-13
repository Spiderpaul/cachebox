import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Image from "../../assets/signup.jpg"


//Estilos----------------------------------------------------
    export const Div = styled.div`
        position: relative;
        background-image: url(${Image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100vh;
    `;
    export const StImg = styled.img`
        position: absolute;
        width: 150px;
        top: 30px;
        left: 30px;
    `;
    export const LoginBtn = styled.button`
        position: absolute;
        background-color: #F58D74;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 22px;
        padding: 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #6699FF;
        }
    `;
    export const StDiv = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255,255,255,0.3);
        width: 40%;
        max-width: 550px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        padding-top: 30px;
        padding-bottom: 30px;
    `;
    export const StDiv2 = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    export const StH1 = styled.h1`
        color: white;
        text-align: center;
        margin-top: 10px;
    `;
    export const StDivInputs = styled.div`
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
    `;
    export const SignBtn = styled.button`
        background-color: #F58D74;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 24px;
        padding: 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;

        &:hover {
            background-color: #6699FF;
        }
    `;
    export const StInput = styled.input`
        color: white;
        width: 60%;
        height: 35px;
        margin: 5px;
    `;
    export const StLink = styled(Link)`
        color: white;
        text-decoration: none;

        &:hover {
            color: #6699FF;
            text-decoration: underline;
        }
    `;
    //Estilos----------------------------------------------------