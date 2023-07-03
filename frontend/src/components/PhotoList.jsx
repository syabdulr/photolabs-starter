import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  // Mapping over the photoData array to create PhotoListItem components
  const photoItems = props.photoData.map((photo) => {
    // Check if the current photo is in the likedPhotoArray
    const liked = props.likedPhotoArray.includes(photo.id);
    return (
      <PhotoListItem
        key={photo.id}
        {...photo}
        photo={photo}
        liked={liked}
        onClickLikes={props.onClickLikes}
        onClickModal={props.onClickModal}
        onLoadTopic={props.onLoadTopic}
      />
    );
  });

  return (
    <ul className="photo-list">
      {/* Rendered photo items */}
      {photoItems}
    </ul>
  );
};

export default PhotoList;
