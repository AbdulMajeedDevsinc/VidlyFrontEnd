import React, { Component } from 'react';
import "./App.css";
import Movies from './components/movies'
class App extends Component {
  state = {  } 
  render() { 
    return (
      <main className='container'>
        <Movies />
      </main>
    );
  }
}
 
export default App;