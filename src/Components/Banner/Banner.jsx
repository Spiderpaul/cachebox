import React from "react";
import { styled } from "styled-components";
import banner from "../../assets/banner2.jpg";
import Axolote from "../../assets/axolote.svg"
const Banner = () => {
    //Estilos------------------------------------------------------------
    const StDiv = styled.div`
        /* background-image: url(${banner});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; */
        background: #F58D74;
        position: relative;
        height: 440px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
    `;
    const StImg = styled.img`
        max-width: 40%;
    `;
    const Div = styled.div`
        position: absolute;
        top: 50vh;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        background: linear-gradient(180deg, transparent, rgba(77, 77, 77, 0.61));
    `;
    //Estilos------------------------------------------------------------
    return (
        <StDiv>
            <StImg src={Axolote} alt="Imagen de la mascota" />
        </StDiv>
    )
}

export default Banner