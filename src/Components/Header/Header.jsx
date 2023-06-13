import { AppBar, Avatar, IconButton, Toolbar, Popover, MenuItem } from "@mui/material";
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import CacheBox from "../../assets/CacheBox.png";
// import { auth, signOut } from "../../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../app/reducers/userSlice";

const Header = () => {
    //Redux----------------------------------------------
    const dispatch = useDispatch();
    //Redux----------------------------------------------
    //Hocks----------------------------------------------
    const [show, setShow] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const hideHeader = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", hideHeader);
        return () => window.removeEventListener("scroll", hideHeader);
    },[]);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleMenuClose = (e) => {
        setAnchorEl(null);
        dispatch(logout());
        // signOut(auth); //Saliendo de sesión de Firebase
        navigate("/login");
    }
    const handleMenuHide = (e) => {
        setAnchorEl(null);
    }
 
    //Hocks----------------------------------------------
    
    //EStilos---------------------------------------------
    const StBar = styled(AppBar)`
        top: 0;
        left: 0;
        right: 0;
    `;
    const StToolbar = styled(Toolbar)`
        background-color: #4d4d4d;
        display: flex;
        justify-content: space-between;
        ${props => props.trasparent && `background-color: transparent;`}
    `;
    const StImg = styled.img`
        width: 150px;
        cursor: pointer;
    `;
    const StAvatar = styled(Avatar)`
        cursor: pointer;
    `;
    const StPopover = styled(Popover)`
        & .MuiPopover-paper {
            width: 200px;
            padding: 8px;
        }
    `;
    //EStilos---------------------------------------------

    return (
        <StBar position="sticky" elevation={0} color="transparent">
            <StToolbar trasparent={show}>
                <IconButton onClick={ () => history.push("/")}>
                    <StImg src={CacheBox} alt="Logo"/>
                </IconButton>
                <StAvatar onClick={handleMenuOpen}></StAvatar>
                <StPopover 
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuHide}
                anchorReference="anchorEl"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                style={{ width: '200px', top: '35px', right: '20px', left: 'auto' }}
                >
                    {/* <MenuItem onClick={ () => history.push("/profile")}>Mi perfil</MenuItem> */}
                    <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
                </StPopover>
            </StToolbar>
        </StBar>
    )
}

export default Header