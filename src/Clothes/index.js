import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
import Popup from 'reactjs-popup';

export default class Clothes extends Component {
  constructor(props) {
    super(props)
  }

  // render() {
  //   return (
  //     <div>
  //       <Link to={`/closet/${this.props.id}`}>
  //         <img className='closet-images' src={this.props.imageUrl} alt='Closet Item' />
  //         <p>{this.props.clothesType}</p>
  //         <p>{this.props.storePurchased}</p>
  //       </Link>
  //       <Route exact path={`/closet/${this.props.id}`} />
  //     </div>
  //   )
  // }
}