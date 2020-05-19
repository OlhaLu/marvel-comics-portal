import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardCharacter({ data }) {
  return (
    <Link to={`/character/${data?.id}`}>
      <Container>
        <div className="imgContainer">
          <img
            src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
            alt={data?.name}
          />
        </div>
        <div className="nameContainer">
          <span>{data?.name}</span>
        </div>
      </Container>
    </Link>
  );
}

CardCharacter.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    name: PropTypes.name,
    id: PropTypes.number,
  }),
};
