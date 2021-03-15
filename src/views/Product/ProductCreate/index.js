import React, { useState, useEffect, useCallback } from "react";
import {Redirect} from 'react-router-dom'

import api from "../../../routes/api";
import AppBar from '../../../components/Appbar'

import {
  ButtonDanger,
  ButtonSuccess,
  InputMax,
  InputMedium,
  Container,
  ContainerInput,
  ContainerButton,
  Form,
  Titulo,
  LinkButton,
} from "./style";

const CreateProduto = ({ match }) => {
  
  const [redirect, setRedirect] = useState(false);
  const [titulo, setTitulo] = useState("Criar");
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [quantEstoque, setQuantidade] = useState(0);
  const [precoVenda, setValorVenda] = useState(0.00);
  const [precoCusto, setValorCompra] = useState(0.00);

  const LoadProductDetails = useCallback(() => {
     api.get(`/produto/${match.params.id}`).then((response) => {
      setCodigo(response.data.codigo);
      setNome(response.data.nome);
      setQuantidade(response.data.quantEstoque);
      setValorVenda(parseFloat(response.data.precoCusto));
      setValorCompra(parseFloat(response.data.precoVenda));
    }, [LoadProductDetails]);
  }, [match.params.id])

  async function Save() {
    if (match.params.id) {
      await api
        .put(`/produto/${match.params.id}`, {
          codigo,
          nome,
          quantEstoque,
          precoCusto,
          precoVenda,
        })
        .then(() => setRedirect(true))
        .catch((response) => {
          alert(response.data.error);
        });
    } else {
      await api
        .post("/produto", {
          codigo,
          nome,
          quantEstoque,
          precoCusto,
          precoVenda,
        })
        .then(() => setRedirect(true))
        .catch((response) => {
          alert(response.data.error);
        });
    }
  }
  useEffect(() => {
    if (match.params.id) {
      setTitulo("Alterar");

      LoadProductDetails();
    }
  }, [match.params.id, LoadProductDetails]);

  return (
    <div>
      <AppBar />
      <Container>
      { redirect && <Redirect to="/produto" /> }
        <Form>
          <Titulo>
            <span>{titulo}</span>
          </Titulo>
          <InputMax>
            <span>Nome</span>
            <input
              type="text"
              placeholder="Nome do produto"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            ></input>
          </InputMax>
          <ContainerInput>
            <InputMedium>
              <span>Código</span>
              <input
                type="text"
                placeholder="Código do produto"
                onChange={(e) => setCodigo(e.target.value)}
                value={codigo}
              />
            </InputMedium>
            <InputMedium>
              <span>Quantidade</span>
              <input
                type="number"
                placeholder="Quantidade"
                onChange={(e) => setQuantidade(e.target.value)}
                value={quantEstoque}
              />
            </InputMedium>
          </ContainerInput>
          <ContainerInput>
            <InputMedium>
              <span>Valor de Compra</span>
              <input
                type="number" min="0.00" max="10000.00" step="0.01"
                placeholder="Quanto custou?"
                onChange={(e) => setValorCompra(e.target.value)}
                value={precoCusto}
              />
            </InputMedium>
            <InputMedium>
              <span>Valor de Venda</span>
              <input
                type="number" min="0.00" max="10000.00" step="0.01"
                placeholder="Por quanto quer vender?"
                onChange={(e) => setValorVenda(e.target.value)}
                value={precoVenda}
              />
            </InputMedium>
          </ContainerInput>
          <ContainerButton>
            <ButtonSuccess onClick={Save}>Salvar</ButtonSuccess>
            <LinkButton to={`/produto`}>
              <ButtonDanger>Cancelar</ButtonDanger>
            </LinkButton>
          </ContainerButton>
        </Form>
      </Container>
    </div>
  );
};
export default CreateProduto;
