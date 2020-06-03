import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ComicCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
      comics: null,
    };

    this.comicId = props.match.params.id;

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/comics/' +
        this.comicId +
        '/characters?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let characters = resp.data.data.results;
      console.log(characters);
      this.setState({
        characters,
      });
    });
  }

  render() {
    if (this.state.characters) {
      return (
        <div>
          {this.state.characters.map((character, i) => (
            <div key={i}>
              <Link to={'/characters/' + character.id}>
                <h2>{character.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Characters</h2>
        </div>
      );
    }
  }
}

export default ComicCharacters;
