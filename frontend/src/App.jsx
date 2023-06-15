//App.jsx

import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';

const dummyData = Array.from({ length: 3 }).map((_, index) => ({
  id: String(index),
  location: {
    city: "Montreal",
    country: "Canada"
  },
  urls: {
    full: `${process.env.PUBLIC_URL}/Image-${index}-Full.jpeg`,
    regular: `${process.env.PUBLIC_URL}/Image-${index}-Regular.jpeg`
  },
  user: {
    id: String(index),
    username: `exampleuser${index}`,
    name: `Joe Example ${index}`,
    profile: `${process.env.PUBLIC_URL}/profile-${index}.jpg`
  }
}));


const App = () => (
  <div className="App">
    <PhotoList photos={dummyData} />
  </div>
);

export default App;
