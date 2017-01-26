import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import API_KEY from './config.js';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

// Render to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
