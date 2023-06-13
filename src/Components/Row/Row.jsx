import {List, ListItem, ListItemText, Divider, Button, IconButton} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { styled } from "styled-components";
import ReactPlayer from "react-player"

const Row = () => {
    const StConDiv = styled.div`
        width: 100%;
        min-height: 50vh;
        padding: 30px 0;
        display: flex;
        /* border-bottom: 3px solid black; */
    `;
    const StDiv = styled.div`
        width: 100%;
        height: auto;
        min-height: 45vh;
        display: flex;
        align-content: flex-start;
        justify-content: start;
        gap: 20px;
        flex-wrap: wrap;
        margin: auto;
        padding-left:20px;
    `;
    const StTitDiv = styled.div`
        background-color: white;
        color: #424242;
        width: auto;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        /* box-shadow: 0 0 10px 5px rgba(72,72,72,0.6); */
        border: 3px solid #F58D74;
    `;
    const StdivBtn =styled.div`
        width: auto;
        height: 50px;
        margin-top: 3px;
        margin-right: 3px;
        align-self: flex-end;
    `;
    const StPydiv = styled.div`
        background-color: #e1e2e2;
        width: 300px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const StH4 = styled.h2`
        color: #989898;
        margin-left: 20px;
    `;
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

    return (
        <StConDiv>
            <StTitDiv>
                <StdivBtn>
                    <Button variant="contained" href="#">
                        <AddCircleIcon/>
                    </Button>
                </StdivBtn>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Videojuegos" />
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItem>
                    <Divider />
                    
                </List>
            </StTitDiv>
            <StDiv>
                <StPydiv>
                    <ReactPlayer url="https://www.youtube.com/watch?v=2SNF4M_v7wc" width="300px" height="180px"/>
                </StPydiv>
                
                <StPydiv>
                    <Button variant="contained" href="#">
                        <AddCircleIcon/>
                    </Button>
                </StPydiv>
                
            </StDiv>
        </StConDiv>
    )
}

export default Row