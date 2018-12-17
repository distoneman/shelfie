import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Dashboard from '../src/component/dashboard/dashboard.js'
import Form from '../src/component/form/form.js'
import Header from '../src/component/header/header.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  };
  
  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => {
        console.log(res.data)
        this.setState({
          products: res.data
        })
      })
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard list={this.state.products} />
      </div>
    );
  }
}

export default App;
