import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import FavBadge from './FavBadge';

const PhotoListItem = (props) => {
  const { id, imageSource, username, userCity, userCountry, photoFavourites, selectFavourite, userProfile, onClick } = props;

  const handleClick = (event) => {
    onClick(event);
  };

  const isFavPhoto = photoFavourites[id] || false;

  return (
    <div className="photo-list--item" onClick={handleClick}>
      <PhotoFavButton id={id} photoFavourites={photoFavourites} selectFavourite={selectFavourite} />
      {isFavPhoto && <FavBadge isFavPhotoExist={isFavPhoto} />} {/* Display the FavBadge if the photo is marked as favorite */}
      <div className="photo-list--image-container">
        <img className="photo-list--image" src={imageSource} alt="Photo" />
        <div className="photo-list--user-details">
          <img className="photo-list--user-profile" src={userProfile} alt="User Profile" />
          <div className="photo-list--user-info">
            {username}
            <div className="photo-list--user-location">
              {userCity}, {userCountry}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
