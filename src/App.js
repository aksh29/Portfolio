import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './router';
import Fade from 'react-reveal/Fade';



class App extends React.Component {
  render(){
  return (
    <Fade>
      <div className="App">
        <Routes/>
      </div>
    </Fade>
  );
}
}

export default App;