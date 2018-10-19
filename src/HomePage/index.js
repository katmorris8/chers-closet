import React, { Component } from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClosetPage from '../ClosetPage';
import Register from "../RegistrationPage";
import Login from "../LoginPage";
import Settings from '../Settings';
import PrivateRoute from '../PrivateRoute';

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  getLoggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          {
            !this.state.isLoggedIn &&
            <nav>
              <Link to='/register'>create a closet</Link>
              <Link to='/login'>log into your closet</Link>
            </nav>
          }

          {
            this.state.isLoggedIn &&
            <nav>
              <Link to='/closet'>go to my closet</Link>
            </nav>
          }

          {/* <Route path='/' exact component={HomePage} /> */}
          <Route path="/register" exact render={(props) => <Register {...props} getLoggedIn={this.getLoggedIn} />} />
          <Route path="/login" exact render={(props) => <Login {...props} getLoggedIn={this.getLoggedIn} />} />
          <PrivateRoute path="/closet" exact component={ClosetPage} />
          <PrivateRoute path="/settings" exact component={Settings} />
        </div>
      </Router>
    )
  }
}