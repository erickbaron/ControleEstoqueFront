import styled from 'styled-components';
import {Link} from "react-router-dom";

import BigCard from "../../components/BigCard";

export const Container = styled(BigCard)`
  width: 100%;
  padding: 2px;
  display: inline-block;
`;

export const DivContainer = styled.div`
    margin-top:15px;
    width: 100%;
    flex-wrap: wrap;
`;



export const Button = styled.div`
    width: 150px;
    height: 50px;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`



