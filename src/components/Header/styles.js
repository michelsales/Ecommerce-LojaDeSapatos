import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    max-width: 1200px;
    width: 100%;
`
export const WrapperLogo = styled.div`
    display: flex;
    align-items: center;

    h1 {
        margin-left: 10px;
        color: #fff;
    }
`
export const WrapperCard = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    svg {  
        font-size: 40px;
        color: #fff;
        margin-left:10px;
    }
`
export const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    
    span {
        color: #dfdfdf;
        align-self: end;
    }

`