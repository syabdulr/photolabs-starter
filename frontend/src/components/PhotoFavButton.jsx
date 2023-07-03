import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // Click handler for the favorite button
  const onClickHandler = function() {
    props.onClickLikes(!props.liked, props.photoId);
  };

  return (
    <div className='photo-list--fav-icon photo-list--fav-icon-svg' onClick={onClickHandler}>
      {/* Favorite icon */}
      <FavIcon fill={props.liked ? '#C80000' : '#EEEEEE'} />
    </div>
  );
}

export default PhotoFavButton;
