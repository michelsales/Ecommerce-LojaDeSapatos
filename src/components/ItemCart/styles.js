import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: auto;
    background: #fff;
    margin-bottom: 15px;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        height: 100px;
        margin-bottom: 10px;
        border: 1px solid #dfdfdf;
        
        &:nth-child(1){
            border-top: 0;
        }
        
        img {
            width: 20%;
            width: 70px;
            border-radius: 5px;
            margin-left: 3rem;
        }
        th {
            color: #000;
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            font-size: 17px;
            width: 25%;
        }
        td { 
            padding: 1rem 2rem;
            border: 0;
            color: #00;
            border-radius: 0.25;
            width: 20%;

           svg {
               color: var(--purple);
               margin-right: 2rem;
               cursor: pointer;
               height: 20px;
               width: 20px;
           }
        }
    }
`
export const ButtonADD = styled.button`
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: var(--purple);
    color: var(--white);

    &:hover {
        transition: ease-in-out .5s;
    }
`
export const InputNumber = styled.input`
    width: 20px;
    width: 40px;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background: var(--white);
    border: 1px solid #dfdfdf;
`