import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ComicsPage from './ComicsPage/ComicsPage';
import DetailComic from './DetailComic/DetailComic';
import ComicCharactersPage from './ComicCharactersPage/ComicCharactersPage';
import CharactersPage from './CharactersPage/CharactersPage';
import DetailCharacter from './DetailCharacter/DetailCharacter';
import CharacterComicsPage from './CharacterComicsPage/CharacterComicsPage';

import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={routes.COMICS_PAGE} component={ComicsPage} />
        <Route path={routes.COMIC_DETAILS_PAGE} component={DetailComic} />
        <Route
          path={routes.COMIC_CHARACTERS_PAGE}
          component={ComicCharactersPage}
        />
        <Route path={routes.CHARACTERS_PAGE} component={CharactersPage} />
        <Route
          path={routes.CHARACTER_DETAILS_PAGE}
          component={DetailCharacter}
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
