import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <h1 className="top-nav-bar--logo">PhotoLabs</h1>

      {/* List of topics */}
      <TopicList topicData={props.topicData} onLoadTopic={props.onLoadTopic} />

      {/* Favorite badge */}
      <FavBadge likedPhotoArray={props.likedPhotoArray} />
    </div>
  );
};

export default TopNavigation;
