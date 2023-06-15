//PhotoListItem.jsx

import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  
  return (
    <div key={id} className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
        <h2 className="photo-list__user-info">{username}</h2>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
      <div onClick={toggleFavorite}>
        <FavIcon isFavorited={isFavorited} />
      </div>
    </div>
  );
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem;
