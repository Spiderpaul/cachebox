import styled from "@emotion/styled"

const Footer = () => {

    const StDiv = styled.div`
        background-color: #424242;
        color: white;
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    return (
        <StDiv>
            <h4>Paul Lugo - 2023</h4>
        </StDiv>
    )
}

export default Footer