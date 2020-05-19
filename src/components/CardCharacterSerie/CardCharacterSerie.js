import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardCharacterSerie({ data }) {
  return (
    <a href={data?.urls[0].url} target="blank">
      <Container>
        <div className="imgContainer">
          <img
            src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
            alt={data?.name}
          />
        </div>
        <div className="nameContainer">
          <span>{data?.title}</span>
        </div>
      </Container>
    </a>
  );
}

CardCharacterSerie.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    name: PropTypes.name,
    id: PropTypes.number,
  }),
};
