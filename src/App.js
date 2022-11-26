import logo from './logo.svg';
import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from 'react-router-dom'

import Home from './layouts/home/home';

export default class App extends React.Component {
  render() {
    return (
      <div id="app" className="App">
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
