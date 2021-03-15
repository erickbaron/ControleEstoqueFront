import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = () => {
  return [
    {
      title: 'Código',
      render: rowData => {
        return <span>{rowData.codigo}</span>;
      },
    },
    {
      title: 'Nome',
      render: rowData => {
        return <span>{rowData.nome}</span>;
      },
    },
    {
      title: 'Preço de custo',
      render: rowData => {
        return <span>{rowData.precoCusto}</span>;
      },
    },
    {
      title: 'Preço de venda',
      render: rowData => {
        return <span>{rowData.precoVenda}</span>;
      },
    },
    {
      title: 'Quantidade',
      render: rowData => {
        return <span>{rowData.quantEstoque}</span>;
      },
    },
    
  ];
};