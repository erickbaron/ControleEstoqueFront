import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  span {
    color: black;
    margin-bottom: 5px;
    font-size: 20px;
  }

  input {
    font-size: 16px;
    padding: 10px;
    border: 3px solid #555;
    border-radius:5px;
    width: 130px;
  }
`;

export const InputMedium = styled(Input)`
  width: 130px;
  padding-right: 15px;
  padding-bottom:15px;
  flex-direction: column;
`;


export const ButtonContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 130px;
  height: 45px;
  border: 2px solid;
  border-radius: 5px;
  background-color: #5cb85c;
  border-color: #4cae4c;
  margin-right: 5px;
  margin-bottom: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
