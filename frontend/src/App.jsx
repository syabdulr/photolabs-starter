import React from 'react';

// Custom hooks
import useApplicationData from './hooks/useApplicationData';

// Styles
import './App.scss';

// Components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  // Destructuring values from the custom hook
  // This hook handles state and functions related to application data
  const {
    photoData,
    topicData,
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal,
    onLoadTopic,
  } = useApplicationData();

  return (
    <div className="App">
      {/* HomeRoute component displays the home page. It's supplied with various props for handling topics, photos, and interactions like clicking on a modal or like button */}
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        onClickModal={onClickModal}
        onClickLikes={onClickLikes}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic}
      />

      {/* PhotoDetailsModal is displayed when displayModal is true. It provides details of a particular photo and allows for user interactions like closing the modal or liking a photo */}
      {displayModal && (
        <PhotoDetailsModal
          photoData={photoData}
          onClose={() => setDisplayModal(false)}
          modalData={modalData}
          onClickModal={onClickModal}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
        />
      )}
    </div>
  );
};

export default App;
