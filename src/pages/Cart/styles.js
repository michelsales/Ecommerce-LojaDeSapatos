import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--background);

    `

export const WrapperCart = styled.div`
    width: 100%;
    max-width: 1028px;
    background: var(--white);
    border-radius: 10px;
    border: 0;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1{
        color: var(--purple);
        align-self: center;
        margin-top: 10px;
    }
`
export const WrapperBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    span {
        margin-right: 40px;
    }
`
export const ButtonFInished = styled.button`
    background: var(--purple);
    height: 40px;
    border: 0;
    border-radius: 5px;
    color: var(--white);
    width: 150px;
    padding: 5px;
    margin-left: 40px;
    &:hover {
        transition: ease-in-out .5s;
    }
`