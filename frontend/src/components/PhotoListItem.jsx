import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

// Component to render a single photo item
const PhotoListItem = (props) => {
  return (
    <div className='photo-list--item'>
      {/* Favorite button */}
      <PhotoFavButton photoId={props.id} onClickLikes={props.onClickLikes} liked={props.liked} />

      {/* Photo image */}
      <img className='photo-list--image' src={props.urls.regular} onClick={() => props.onClickModal(props.photo)} />

      {/* User details */}
      <div className='photo-list--user-details photo-list--user-info'>
        <h3>{props.user.name}</h3>
      </div>
    </div>
  );
};

export default PhotoListItem;
