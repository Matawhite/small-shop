import React from 'react'
import './product.css'

// class Product extends Component {
//
//   render(){
//     return (
//       <div className="card product">
//         <img src={this.props.imgUrl} className="card-img-top" alt="Product" />
//         <div className="card-block">
//           <h4 className="card-title">{this.props.title}</h4>
//           <p className="card-text">Price: $ {this.props.price}</p>
//           <a href="#" className="btn btn-primary">Add to Wishlist</a>
//         </div>
//       </div>
//     )
//   }
// }

const Product = props => {
  return(
    <div className="card product">
      <img src={props.imgUrl} className="card-img-top" alt="Product" />
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">Price: $ {props.price}</p>
        <a href="#" className="btn btn-primary">Add to Wishlist</a>
      </div>
    </div>
  )
}

export default Product
