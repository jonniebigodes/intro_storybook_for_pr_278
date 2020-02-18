// initial code
/* import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
 */

// updated code for data section

/* import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";
import TaskList from "./components/TaskList";
import "./index.css";
 function App() {
  return (
    <Provider store={store}>
      <TaskList/>
    </Provider>
  );
} 
export default App; */

// updated code for screen section

import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";
import InboxScreen from "./components/InboxScreen";
import "./index.css";
 function App() {
  return (
    <Provider store={store}>
      <InboxScreen/>
    </Provider>
  );
} 
export default App;
