import styled from 'styled-components';
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

export const Container = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    box-shadow: none;
    width:500px;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  box-shadow: none;
`;

export const CloseButton = styled(IconButton)`
  right: '0px';
  padding: 0;
`;

export const CloseIcon = styled(Close)`
  color: #f0f2f5;
  width: 28px;
  height: 28px;
`;

export const ContentContainer = styled(DialogContent)`
  background-color: #fff;
  border: 4px outset #555;
  border-radius: 5px;
`;

export const ContentTitle = styled(DialogTitle)`
  padding: 0px 0;
  text-align:center
`;

export const ContentText = styled(DialogContentText)``;
