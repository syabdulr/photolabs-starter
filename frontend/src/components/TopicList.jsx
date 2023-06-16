//TopicList.jsx

import React from 'react';
import TopicListItem from './TopicListItem';
import './TopicList.scss'; 

const TopicList = ({ topics }) => (
  <div className="top-nav-bar__topic-list">
    {
      topics.map((topic) => <TopicListItem key={topic.id} {...topic} />)
    }
  </div>
);

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "label": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "label": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "label": "People"
    },
  ]
}

export default TopicList;
