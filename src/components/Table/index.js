import React, {useState} from "react";
import {
  TableCell,
  TableHeader,
  TableRow,
  IconContainer,
  IconButton,
  IconImg,
  LinkButton,
} from "./style";
import Dialog from '../Produto/DialogProduto'
import api from "../../routes/api";

import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Tables = ({ cols, data, getProdutos }) => {
  
    const [dialogState, setDialogState] = useState({
      produto: null,
      isOpen: false,
    });

  async function Remove(row) {
    console.log(row);
    await api.delete(`/produto/${row}`).then(getProdutos);
  }
  
  async function openDialog(item, getFromProdutosState){
    var info = {
      produto: getFromProdutosState
        ? data.find(
          produto => produto.Nome === item.nome
          )
        : item,
      isOpen: true,
    };
    await setDialogState(info);
    console.log(dialogState);
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        setDialogState={setDialogState}
        dialogState={dialogState}
      />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableHeader align="center" key={col.title}>{col.title}</TableHeader>
              ))}
              <TableHeader align="center">Ação</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}  value={row.quantEstoque}>
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="center">{row.nome}</TableCell>
                <TableCell align="center">{`R$` + row.precoCusto.toFixed(2).replace('.',',')}</TableCell>
                <TableCell align="center">{`R$` + row.precoVenda.toFixed(2).replace('.',',')}</TableCell>
                <TableCell align="center">{row.quantEstoque}</TableCell>
                <TableCell align="center">
                  <IconContainer>
                    <IconButton onClick={() => Remove(row.id)}>
                      <IconImg src={deleteIcon} />
                    </IconButton>
                    <IconButton onClick={() => openDialog(row)}>
                      <span>+</span>
                    </IconButton>
                    <LinkButton to={`/produto/update/${row.id}`}>
                      <IconButton >
                        <IconImg src={editIcon} />
                      </IconButton>
                    </LinkButton>
                  </IconContainer>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Tables;
