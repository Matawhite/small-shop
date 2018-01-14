import React, { Component } from 'react'
import './wishlist.css'
import ProductCondensed from '../condensedProduct/productCondensed'

class Wishlist extends Component {
  constructor(props){
    super(props)

    this.state = {
      wishlist: [
        {
          title: 'Bolgogna Killer',
          price: 23.99,
          _id: 'SKLKJHK199810'
        },
        {
          title: 'Bolgogna Killer',
          price: 23.99,
          _id: 'SKLKJHK1998911'
        },
        {
          title: 'Bolgogna Killer',
          price: 23.99,
          _id: 'SKLKJHK1998912'
        },

      ]
    }

    this.createWishList = this.createWishList.bind(this)
  }

  createWishList = () => {
    const list = this.state.wishlist.map( product =>
      <ProductCondensed product={product} key={product._id} />
    )
    return (list)
  }
  render(){
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-tile">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Wishlist
