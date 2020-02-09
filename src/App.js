import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReturnRandomString} from './Helpers/RandomHelper.js';



class App extends Component {
  constructor(){
    super();
      this.state = {
        string: "Howdy!",
        stringArray: ["Howdy", "Hello, this is Finn.", "I'm Finn", "My name is Finn"]
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{ this.state.string }</h1>
          <button onClick={() => this.setState({string: ReturnRandomString(this.state.stringArray)}) } >Change text</button>  
        </header>
      </div>
    );
  }
}

// function GetRandom(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
