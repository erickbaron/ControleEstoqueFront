import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Dialog from "../../Dialog";
import { ButtonContainer, Button, InputMedium, Container } from "./styles";

const DialogProdutos = ({ setDialogState, dialogState }) => {
  const { produto } = dialogState;

  const history = useHistory();

  const closeDialog = useCallback(() => {
    setDialogState({ produto, isOpen: false });
  }, [produto, setDialogState]);

  if (!produto) {
    return <div data-testid="DialogMotoristas-EmptyDiv"></div>;
  }

  return (
    <Dialog
      isOpen={dialogState.isOpen}
      title={
        <>
          <p>
            Você selecionou
            <strong> {produto.nome} </strong>:
          </p>
        </>
      }
      handleClose={() => closeDialog()}
    >
      <Container>
        <InputMedium>
          <span>Adicionar:</span>
          <input
           type="number"
           placeholder="Quantidade"
          // onChange={(e) => setQuantidade(e.target.value)}
          // value={quantEstoque}
          />
        </InputMedium>
        <ButtonContainer>
          <Button
          // data-testid="btn-liberar"
          // handleClick={handleClickLiberarMatinal}
          // disabledHover={!produto?.DataChamadaMatinal}
          >
            <p>Salvar</p>
          </Button>
        </ButtonContainer>
      </Container>
    </Dialog>
  );
};

export default DialogProdutos;
