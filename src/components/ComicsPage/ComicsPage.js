import React, { Component } from 'react';
import Comic from '../DetailComic/DetailComic';
import Axios from 'axios';

import api from '../../services/api';

class ComicsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
    };

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/comics?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let comicsFromServer = resp.data.data.results;
      console.log(comicsFromServer);
      this.setState({
        comics: comicsFromServer,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Comics</h1>
        {this.state.comics.map((comic, i) => (
          <Comic {...comic} key={i} />
        ))}
      </div>
    );
  }
}

export default ComicsPage;
