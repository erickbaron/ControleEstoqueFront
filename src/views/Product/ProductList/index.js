import React, { useState, useEffect } from "react";
import api from "../../../routes/api";
import AppBar from '../../../components/Appbar'

import { tableConstants } from "./tableConstants";
import Table from "../../../components/Table";
import { DivContainerTable, Container, Button, LinkButton, ButtonContainer } from "./style";

import produtoJson from "./produto.json";
const Produto = () => {
  const [produtos, setProdutos] = useState([]);


  async function getProdutos() {
      setProdutos(produtoJson);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <AppBar />
      <Container>
        <DivContainerTable>
          <Table
            cols={tableConstants()}
            data={produtos}
            getProdutos={getProdutos}
          />
        </DivContainerTable>
        <ButtonContainer>
          <LinkButton to={`/produto/create`}>
            <Button>Cadastrar Produto</Button>
          </LinkButton>
        </ButtonContainer>
      </Container>
    </div>
  );
};
export default Produto;
