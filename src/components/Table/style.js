import styled, { css }  from 'styled-components';
import TableCellMaterial from "@material-ui/core/TableCell";
import TableRowMaterial from "@material-ui/core/TableRow";

import {Link} from "react-router-dom";

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
`
export const TableCell = styled(TableCellMaterial)`
    text-align: center;`;

export const TableHeader = styled(TableCellMaterial)`
    text-align: center;
    font-weight: bold;
`;

export const TableRow = styled(TableRowMaterial)`
    ${props =>
    props.value === 0 &&
    css`
    border-left: 15px outset red;
    border-radius: 50px;
    `}
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const IconButton = styled.button`
    padding: 2px;
    border: 2px solid;
    border-radius: 5px;
    border-color: black;
    align-content: center;
    text-align: center;
    
    width: 32px;
    height: 32px;

    &:hover{
        cursor: pointer;
    };
`;

export const IconImg = styled.img`
    width: 20px;
    height: 20px;
`;