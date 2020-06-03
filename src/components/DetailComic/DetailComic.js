import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class DetailComic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: null,
    };

    this.comicId = props.match.params.id;

    Axios.get(
      'https://gateway.marvel.com:443/v1/public/comics/' +
        this.comicId +
        '?apikey=f367c5b99b3652be48ad9adf86fdb00b',
    ).then(resp => {
      let comic = resp.data.data.results[0];
      console.log(comic);
      this.setState({
        comic,
      });
    });
  }

  render() {
    if (this.state.comic) {
      return (
        <div>
          <h1>{this.state.comic.title}</h1>
          <img src={this.state.comic.thumbnail.path + '.jpg'} alt="" />
          <p>{this.state.comic.description}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Comic</h2>
        </div>
      );
    }
  }
}

export default DetailComic;
