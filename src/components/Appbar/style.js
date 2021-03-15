import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import ButtonMaterial from "@material-ui/core/Button";

export const Container = styled(Toolbar)`
    background-color: black;
`;

export const Image = styled.img `
    display: flex;
    align-content: center;
    max-height: 150px;
    max-width: 150px;
    height: auto;
    width: auto;
    object-fit: fill;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`;


export const Button = styled(ButtonMaterial)`
    display:flex;
    justify-content: flex-end;
`;
