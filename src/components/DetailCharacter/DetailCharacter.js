import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class DetailCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };

    this.characterId = props.match.params.id;

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/characters/' +
        this.characterId +
        '?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let character = resp.data.data.results[0];
      console.log(character);
      this.setState({
        character,
      });
    });
  }

  render() {
    if (this.state.character) {
      return (
        <div>
          <h1>{this.state.character.name}</h1>
          <img src={this.state.character.thumbnail.path + '.jpg'} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Character</h2>
        </div>
      );
    }
  }
}

export default DetailCharacter;
