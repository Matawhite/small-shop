import React, { Component } from 'react'
import './wishlist.css'
import ProductCondensed from '../condensedProduct/productCondensed'
import DataService from '../services/data-service'
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service'

const ns = new NotificationService()

class Wishlist extends Component {
  constructor(props){
    super(props)

    this.state = {
      wishlist: []
    }

    this.createWishList = this.createWishList.bind(this)
    this.onWishListChanged = this.onWishListChanged.bind(this)
  }

  componentDidMount(){
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged)
  }

  componentWillUnount(){
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED)
  }

  onWishListChanged(newWishList){
    this.setState({wishlist:newWishList})
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
