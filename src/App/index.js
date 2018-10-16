import React, { Component } from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClosetPage from '../ClosetPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Cher's Closet</h1>
          <nav>
            <Link to="/login">create a closet</Link>
            <Link to="/closet">log into your closet</Link>
          </nav>
          <Route path="/closet" exact componenet={ClosetPage} />
        </div>
      </Router>
    )
  }
}
