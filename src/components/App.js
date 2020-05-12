import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ComicsPage from '../pages/ComicsPage/ComicsPage';
import CharactersPage from '../pages/CharactersPage/CharactersPage';
import CharactersDetailsPage from '../pages/CharactersDetailsPage/CharactersDetailsPage';
import routes from '../routes';
// import logo from './logo.svg';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={routes.COMICS_PAGE} component={ComicsPage} />
        <Route
          path={routes.CHARACTERS_DETAILS_PAGE}
          component={CharactersDetailsPage}
        />
        <Route path={routes.CHARACTERS_PAGE} component={CharactersPage} />
        <Redirect to={routes.COMICS_PAGE} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
