import React, { Component } from 'react'
import './style.css';

export default class ClosetPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clothes: [],
    }
  }

  componentDidMount = async () => {
    const getClothes = await (await fetch('/api/closet', {
      method: 'GET',
    })).json();

    this.setState({
      clothes: getClothes,
    })
  }

  render() {
    return (
      <div>
        <h2>My Closet</h2>
        {this.state.clothes.map(clothes => {
          return (
            <div>{clothes.imageUrl}</div>
          )
        })}
      </div>
    )
  }
}
