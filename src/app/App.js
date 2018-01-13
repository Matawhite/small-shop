import React, { Component } from 'react';
import Product from '../product/product'
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service'


const http = new HttpService()

class App extends Component {
  constructor(props){
    super(props)
    this.loadData = this.loadData.bind(this)
  }

  loadData = () => {
    http.getProducts().then( products => {
      console.log(products)
    }, error => {
      console.log(error)
    })
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
        <div className="App-main">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
