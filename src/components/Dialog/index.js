import React from 'react';

import {
  Container,
  CloseButtonContainer,
  CloseButton,
  CloseIcon,
  ContentContainer,
  ContentTitle,
  ContentText,
} from './styles';

const CustomDialog = ({ isOpen, handleClose, title, subtitle, children }) => {
  return (
    <Container open={isOpen} data-testid="CustomDialog-Component">
      <CloseButtonContainer>
        <CloseButton
          data-testid="CustomDialog-CloseButton"
          onClick={handleClose}
        >
          <CloseIcon />
        </CloseButton>
      </CloseButtonContainer>
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{subtitle}</ContentText>
        {children}
      </ContentContainer>
    </Container>
  );
};

export default CustomDialog;