import React from 'react';
import './App.css';

function App() {

  const getArtists = () => {
fetch(`http://localhost:3000/api/v1/artists`)
.then(resp => resp.json())
.then(parsedResp => console.log(parsedResp))
  }

const getArtworks = () => {
  fetch(`http://localhost:3000/api/v1/artworks`)
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp))
  }
      
const getMuseums = () => {
  fetch(`http://localhost:3000/api/v1/artists`)
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp))
  }


  return (
    <div className="derp">
        here it is folks. the app. sheeit.
        {getArtists()}
        {getMuseums()}
        {getArtworks()}
    </div>
  );
}

export default App;