import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Listagem from './pages/Listagem';
import Mapa from './pages/Mapa';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listagem" component={Listagem} />
        <Route path="/mapa" component={Mapa} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;