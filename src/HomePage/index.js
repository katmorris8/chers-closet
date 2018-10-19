import React, { Component } from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClosetPage from '../ClosetPage';

export default class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/login'>create a closet</Link>
            <Link to='/closet'>log into your closet</Link>
          </nav>
          {/* <Route path='/' exact component={HomePage} /> */}
          <Route path='/closet' exact component={ClosetPage} />
        </div>
      </Router>
    )
  }
}