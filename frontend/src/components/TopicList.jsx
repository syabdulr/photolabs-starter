import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  // Mapping over the topicData array to create TopicListItem components
  const topicItems = props.topicData.map((topic) => {
    return <TopicListItem key={topic.id} {...topic} onLoadTopic={props.onLoadTopic} />;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {/* Rendered topic items */}
      {topicItems}
    </div>
  );
};

export default TopicList;
