import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home/index';
import ProductCreate from '../views/Product/ProductCreate/index';
import ProductList from '../views/Product/ProductList/index';

export default function Routes(){
  return(
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/produto" exact component={ProductList}/>
        <Route path="/produto/update/:id" exact component={ProductCreate}/>
        <Route path="/produto/create" exact component={ProductCreate}/>
      </Switch>
    </BrowserRouter>
    </div>
  )
}