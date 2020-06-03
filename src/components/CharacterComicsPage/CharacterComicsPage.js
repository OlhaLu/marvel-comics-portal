import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CharacterComics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
      comics: null,
    };

    this.characterId = props.match.params.id;

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/characters/' +
        this.characterId +
        '/comics?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let comics = resp.data.data.results;
      console.log(comics);
      this.setState({
        comics,
      });
    });
  }

  render() {
    if (this.state.comics) {
      return (
        <div>
          {this.state.comics.map((comic, i) => (
            <div key={i}>
              <Link to={'/comics/' + comic.id}>
                <h2>{comic.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Comics</h2>
        </div>
      );
    }
  }
}

export default CharacterComics;
