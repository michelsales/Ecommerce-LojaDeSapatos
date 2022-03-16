import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
    
    h1 { 
        color: var(--white);
    }
`