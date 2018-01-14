import React, { Component } from 'react';
import Product from '../product/product'
import Wishlist from '../wishlist/wishlist'
import './App.css';
import HttpService from '../services/http-service'


const http = new HttpService()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],

    }
    this.loadData = this.loadData.bind(this)
    this.productList = this.productList.bind(this)
  }

  loadData = () => {
    //the actually object here is a promise, need to capture the instance
    const self = this
    http.getProducts().then( data => {
      self.setState({products: data})
    }, error => {
      console.log(error)
    })
  }





  productList = () => {
    const list = this.state.products.map( product =>
      <div className="col-sm-4" key={product._id}>
        <Product
          imgUrl={product.imgUrl}
          title={product.title}
          price={product.price}
          />
      </div>
    )
    return (list)
  }

  componentWillMount(){
    this.loadData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Welcome to The Swag Shop</h2>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
                <div className="row">
                  {this.productList()}
                </div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
