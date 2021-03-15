import React from 'react'

import { Container } from './style';

const BigCard = ({ className, children }) => {
  return (
    <Container data-testid="card-component" className={className}>
      {children}
    </Container>
  );
};

export default BigCard;
