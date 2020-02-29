import React, { Fragment, Component} from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

class App extends Component{
  
  render(){
    const name = "Katy Kate";
  
    return(
      <div className="App">
        <Navbar />
        <h1>Hello World {name }</h1>
      </div>
    );
  }
 
}

export default App;
