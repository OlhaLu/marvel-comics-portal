import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Character from './pages/Character';
import MainPage from './pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/character/:characterId" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
