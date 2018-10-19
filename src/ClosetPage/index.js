import React, { Component } from 'react'
import './style.css';
import Popup from 'reactjs-popup';
// import Clothes from '../ClothesPage';

export default class ClosetPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clothes: [],
      imageUrl: '',
      clothesType: '',
      storePurchased: '',
    }
  }

  fetchClothes = async () => {
    const response = await fetch('/api/closet');
    const clothes = await response.json();
    this.setState({
      clothes: clothes
    });
  }

  getClothesType = e => {
    this.setState({
      clothesType: e.target.value,
    })
  }

  getStorePurchased = e => {
    this.setState({
      storePurchased: e.target.value,
    })
  }

  getImageUrl = e => {
    this.setState({
      imageUrl: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault();
    let newClothes = {
      clothesType: this.state.clothesType,
      storePurchased: this.state.storePurchased,
      imageUrl: this.state.imageUrl,
    }
    this.addClothes(newClothes)
  }

  addClothes = async newClothes => {
    const body = JSON.stringify({
      clothesType: newClothes.clothesType,
      storePurchased: newClothes.storePurchased,
      imageUrl: newClothes.imageUrl,
    });

    fetch('/api/closet', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.fetchClothes();
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
        {/* <button>Logout</button> */}

        <Popup className="add-item-form"
          trigger={<button className="button">Add New Garment</button>}
          modal
          closeOnDocumentClick>

          <form className="form">
            <input className="input" type='text' onChange={this.getClothesType} placeholder='Item Type' />
            
            <input className="input" type='text' onChange={this.getStorePurchased} placeholder='Store Purchased' />
            <input className="input" type='text' onChange={this.getImageUrl} placeholder='Image URL' />
            <button className="input" className="button" onClick={this.submitHandler}>Add to my closet!</button>
          </form>
        </Popup>

        {/* <button>Remove Garment</button>
        <button>Edit Profile</button> */}
        <h2>My Closet</h2>
        <div className='closet-container'>
          {this.state.clothes.map(clothes => {
              return (
                // <button>
                  <img key={clothes.imageUrl} className='closet-images' src={clothes.imageUrl} alt='Closet Item' />
                // </button>
              )
            })}

        </div>
      </div>
    )
  }
}

{/* <div className="album-list-container">
  {this.state.albums.map(album => {
    let count = 0;
    return (
      <Album
        key={album.id - `${count += 1}`}
        id={album.id}
        title={album.title}
        artist={album.artist}
        coverPictureSrc={album.coverPictureSrc}
        addedAlbum={this.state.user.albumId === album.id}
        onClickAddButton={() => this.addAlbum(album.id)}
      />
    )
  })}
</div> */}