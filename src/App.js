import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    artists: [],
    artworks: [],
    museums: []
  }

componentDidMount() {
  fetch(`http://localhost:3000/api/v1/artists`)
  .then(resp => resp.json())
    .then(parsedResp => this.setState ({ artists: parsedResp}))
      .catch(error => console.log(error))
  console.log('one')
  fetch(`http://localhost:3000/api/v1/artworks`)
  .then(resp => resp.json())
    .then(parsedResp => this.setState ({ artworks: parsedResp}))
      .catch(error => console.log(error))
console.log('two')
fetch(`http://localhost:3000/api/v1/museums`)
  .then(resp => resp.json())
    .then(parsedResp => this.setState ({ museums: parsedResp}))
      .catch(error => console.log(error))
}

render() {  
  return (
    <div className="derp">
        here it is folks. the app. sheeit.
    </div>
  );
}
}
export default App;