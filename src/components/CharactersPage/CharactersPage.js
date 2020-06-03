import React, { Component } from 'react';
import Character from '../DetailCharacter/DetailCharacter';
import Axios from 'axios';

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let charactersFromServer = resp.data.data.results;
      console.log(resp.data.data.results);
      this.setState({
        characters: charactersFromServer,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>
        {this.state.characters.map((character, i) => (
          <Character {...character} key={i} />
        ))}
      </div>
    );
  }
}

export default CharactersPage;
