import React, { Component } from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClosetPage from '../ClosetPage';
import Register from "../RegistrationPage";
import Login from "../LoginPage";
import Settings from '../Settings';
import PrivateRoute from '../PrivateRoute';

export default class App extends Component {
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
        <div className="homepage">
          <h1 className="title header">Cher's Closet</h1>
          {
            !this.state.isLoggedIn &&
            <nav className="header">
              <Link className="nav" to='/register'>create a closet</Link>
              <Link className="nav" to='/login'>log into your closet</Link>
            </nav>
          }

          {
            this.state.isLoggedIn &&
            <div className="logout-container">
              <Link to='/'>
                <button className='logout-btn button' onClick={this.logOut}>Log Out</button>
              </Link>
            </div>
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