import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

/**
 * A component for displaying a list of topics.
 * @param {object} props - The component props.
 * @param {function} props.handleTopicClick - A function to handle the click event on a topic.
 * @param {Array} props.topics - An array of topic objects.
 * @returns {JSX.Element} - The rendered component.
 */
const TopicList = ({ handleTopicClick, topics }) => {
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map((topic, index) => (
        <TopicListItem
          key={topic.id + "-" + index}
          id={topic.id}
          label={topic.title}
          link={`/topics/${topic.slug}`}
          handleTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
