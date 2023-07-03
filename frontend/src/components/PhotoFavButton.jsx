import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ id, photoFavourites, selectFavourite }) {

  /**
   * Handle the click event when the like button is clicked.
   * @param {object} event - The click event object.
   */
  const handleLikeClick = (event) => {
    event.stopPropagation();
    selectFavourite(id);
  };

  const checkIfLiked = (photoFavourites, id) => {
    if (!photoFavourites || Object.keys(photoFavourites).length === 0 || !photoFavourites[id]) {
      return '#EEEEEE';
    }

    return '#FF0000';
  }

  return (
    <div className="photo-list--fav-icon" onClick={handleLikeClick}>
      <FavIcon fill={checkIfLiked(photoFavourites, id)} />
    </div>
  );
}

export default PhotoFavButton;
