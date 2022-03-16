import styled from "styled-components";

export const Container = styled.div`
    width: 380px;
    height: 400px;
    background: var(--white);
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    img { 
        width: 60%;
        height: 200px;
    }

    &:hover{
        transition: ease-in-out .2s;
        top: -5px;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: var(--white);
    position: absolute;
    bottom: 10px;
    `
export const Infos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondPurple);
    width: 15%;
    height: inherit;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    
    svg {
        margin-right: 5px;
    }
    `
export const ButtonAdd = styled.button`
    background: var(--purple);
    height: inherit;
    border: 0;
    border-radius: 5px;
    color: var(--white);
    width: 80%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    
    &:hover {
        transition: ease-in-out .5s;
    }
`
export const WrapperInfos = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    flex-direction: column;
    text-overflow: ellipsis;
    height: 100px;
    
    p {
        width: 100%;
        height: auto;
        margin-left: 20px;
        margin-top: 10px;
    }
    
    h2{ 
        height: auto;
    }

    `