import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, photoFavourites, selectFavourite }) {
  const handleLikeClick = (event) => {
    event.stopPropagation();
    selectFavourite(id);
  };

  const checkIfLiked = (photoFavourites, id) => {
    if (!photoFavourites || Object.keys(photoFavourites).length === 0 || !photoFavourites[id]) {
      return '#EEEEEE';
    }

    return '#FF0000';
  };

  const fill = checkIfLiked(photoFavourites, id);

  return (
    <div className="photo-list--fav-icon" onClick={handleLikeClick}>
      <FavIcon fill={fill} />
    </div>
  );
}

export default PhotoFavButton;
