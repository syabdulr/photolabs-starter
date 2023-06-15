//App.jsx

import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => (
  <div className="App">
    {
      Array.from({ length: 3 }).map((_, index) => <PhotoListItem key={index} />)
    }
  </div>
);

export default App;
