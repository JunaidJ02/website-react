import logo from './logo.svg';
import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Switch
} from 'react-router-dom'

import Home from './layouts/home/home';
import UpdateSpotify from './layouts/updateSpotify/updateSpotify';
import NotFoundPage from './layouts/notFoundPage/notFoundPage';

export default class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Routes>

          <Route path='*' element={<NotFoundPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={
            <div id="app" className="App">
              <Home />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}
