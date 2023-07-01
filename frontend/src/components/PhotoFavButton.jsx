import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  const onClickHandler = function() {
    props.onClickLikes(!props.liked, props.photoId);
  };

  return (

    <div className='photo-list--fav-icon photo-list--fav-icon-svg' onClick={onClickHandler}>
      <FavIcon fill={props.liked ? '#C80000' : '#EEEEEE'} />
    </div>

  );
}

export default PhotoFavButton;