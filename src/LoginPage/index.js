import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      isUserLoggedIn: false
    }
  }
  
  logIn = async () => {
    console.log('here!!!');
    console.log('username: ', this.state.username);
    console.log('password: ', this.state.password);

    const requestBody = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })
    console.log('logged in 1');
    let response;
    try {
      response = await fetch('/api/login', {
        method: 'POST',
        body: requestBody,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    catch(e) {
      console.log(e);
      
    }

    console.log('logged in 2');
    const responseBody = await response.json();
    if (response.status === 400) {
      this.setState({
        errorMessage: responseBody.message
      });
      return;
    } else if (response.status === 401) {
      this.setState({
        errorMessage: responseBody.error
      });
      return;
    }
    this.setState({
      isUserLoggedIn: true
    });
    console.log('logged in');
    this.props.getLoggedIn();
    localStorage.setItem('user-jwt', JSON.stringify(responseBody.token));
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if (this.state.isUserLoggedIn) {
      return (
        <Redirect to="/closet" />
      )
    }

    return (
      <div className="form-page">
        <Link to='/'>
          <button className='login-back-btn button'>Back</button>
        </Link>
        <h1>Login</h1>
        <form className="form" onSubmit={this.submitHandler} >
          <input className="input" value={this.state.username} onChange={this.onInputChange} type="text" placeholder='Username' name='username' />
          <input className="input" value={this.state.password} onChange={this.onInputChange} type="password" placeholder='Password' name='password' />
          <button className="input button" type="submit" onClick={this.logIn}>Login</button>
          {this.state.errorMessage && <p className='error-message'>{this.state.errorMessage}</p>}
        </form>
      </div>
    )
  }
}