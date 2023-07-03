import React from 'react'; // Importing the React library

import '../styles/PhotoListItem.scss'; // Importing the stylesheet for the component

import PhotoFavButton from './PhotoFavButton'; // Importing the PhotoFavButton component

// Defining the PhotoListItem component as a functional component
const PhotoListItem = (props) => {

  const { id, imageSource, username, userCity, userCountry, photoFavourites, selectFavourite, userProfile, onClick } = props; // Destructuring the props object

  // Define the handleClick function to handle the click event on the photo item
  const handleClick = (event) => {
    onClick(event);
  };

  return (
    <div className="photo-list--item" onClick={handleClick}>
      <PhotoFavButton
        id={id}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
      />
      <div className="photo-list--image-container">
        <img className="photo-list--image" src={imageSource} />
        <div className="photo-list--user-details">
          <img className="photo-list--user-profile" src={userProfile} />
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
