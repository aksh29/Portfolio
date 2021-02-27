import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './router';
import Fade from 'react-reveal/Fade';
import  Loader  from "./components/Loader/loader";



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    setTimeout(()=>setLoading(false),2000);
  });

  
  {return loading ? (<Loader/>) : (
      <Fade>
        <div className="App">
          <Routes/>
        </div>
      </Fade>)}
}

export default App;