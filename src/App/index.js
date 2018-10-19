import React, { Component } from 'react'
import './style.css';
import HomePage from '../HomePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Cher's Closet</h1>
        <HomePage />
      </div>
    )
  }
}
