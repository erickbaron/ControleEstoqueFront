import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivContainerTable = styled.div`
    
    margin-top:15px;
    width: 75%;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    margin-top:15px;
    width: 75%;
    display: flex;
    justify-content: flex-end;
`;


export const Button = styled.button `
  width: 130px;   
  height: 45px;
  border-radius: 5px;
  margin-top: 15px;
`

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`
