import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  margin-top: 15px;
  width: 50%;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  span {
    color: black;
    margin-bottom: 5px;
  }

  input {
    font-size: 16px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid black;
  }
`;

export const InputMax = styled(Input)`
  width: 100%;
  
`;

export const InputMedium = styled(Input)`
  width: 50%;
  padding-right: 15px;
`;

export const InputMin = styled(Input)`
  width: 30%;
  margin-bottom: 50px;
  padding-right: 15px;
`;


const Button = styled.button `
  width: 130px;   
  height: 45px;
  border-radius: 5px;
  
`

export const ButtonSuccess = styled(Button) `
    background-color: #5cb85c;
    border-color: #4cae4c;
    margin-right: 5px;
    margin: 2px solid black;
    color: white;
    font-size: 16px;
    font-weight: bold; 
`

export const ButtonDanger = styled(Button) `
    background-color: #d9534f;
    border-color: #d43f3a;
    margin-right: 5px;
    margin: 2px solid black;
    color: white;
    font-size: 16px;
    font-weight: bold; 
`


export const Titulo = styled.div`
  margin-bottom: 25px;
  width:100%;
  display: flex;
  justify-content: center;
  span{
    font-size: 30px;
    color: black;
    font-weight: bold;
  }
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`
