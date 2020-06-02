import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
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
        <Route
          path={routes.COMIC_CHARACTERS_PAGE}
          component={ComicCharactersPage}
        />
        <Route path={routes.CHARACTERS_PAGE} component={CharactersPage} />
        <Route
          path={routes.CHARACTER_DETAILS_PAGE}
          component={CharacterDetailsPage}
        />
        <Route
          path={routes.CHARACTER_COMICS_PAGE}
          component={CharacterComicsPage}
        />
        <Redirect to={routes.COMICS_PAGE} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
