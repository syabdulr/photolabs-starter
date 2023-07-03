import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {

  const { photos, topics, openModal, photoFavourites, selectFavourite } = props;

  const handleClick = (photo) => {
    openModal(photo);
  };

  const mappedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        imageSource={photo.urls.regular}
        username={photo.user.username}
        userProfile={photo.user.profile}
        userCity={photo.location.city}
        userCountry={photo.location.country}
        hideUserName={photo.hideUserName}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        similarPhotos={photo.similar_photos}
        topics={topics}
        onClick={() => handleClick(photo)}
      />
    );
  });

  return (
    <ul className="photo-list">
      {photos.length === 0 && <h2>No photos available</h2>}
      {mappedPhotos}
    </ul>
  );
};

export default PhotoList;
