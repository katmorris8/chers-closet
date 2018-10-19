import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
import Popup from 'reactjs-popup';
import ClosetPage from '../ClosetPage';

export default class ClothesDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       clothes: {},
    }
  }

  componentDidMount = async () => {
    this.fetchClothes();
  }

  fetchAlbum = async () => {
    const id = this.props.clothes.params.id;
    const response = await fetch(`/api/clothes/${id}`)
    const clothes = await response.json();
    this.setState({
      clothes: clothes
    })
  }
  
  render() {
    return (
      <div>
        <Route exact path="/closet" component={ClosetPage} />
        <div>
          <img src={`../images/${this.state.clothes.imageUrl}`} />
          <p>{this.state.clothes.clothesType}</p>
          <p>{this.state.clothes.storePurchased}</p>
        </div>
        <Popup className="edit-form"
          trigger={<button className="button">Edit</button>}
          modal
          closeOnDocumentClick>

          <form className="form">
            <input className="input" type='text' onChange={this.getClothesType} placeholder='Item Type' />
            <input className="input" type='text' onChange={this.getStorePurchased} placeholder='Store Purchased' />
            <input className="input" type='text' onChange={this.getImageUrl} placeholder='Image URL' />
            <button className="button" onClick={this.submitHandler}>Update!</button>
            <button className="delete" onClick={this.delete}>Delete Item</button>
          </form>
        </Popup>
        
      </div>
    )
  }
}
