import React from "react";
import AppBar from '../../components/Appbar'

import { Container, DivContainer, Button, LinkButton } from "./style";

const Page = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <DivContainer>
          <LinkButton to={`/produto/create`}>
            <Button>Novo produto</Button>
          </LinkButton>
        </DivContainer>
        <DivContainer>
          <LinkButton to={`/produto`}>
            <Button>Verificar estoque</Button>
          </LinkButton>
        </DivContainer>
      </Container>
    </div>
  );
};
export default Page;
