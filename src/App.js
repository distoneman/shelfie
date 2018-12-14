import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/component/dashboard/dashboard.js'
import Form from '../src/component/form/form.js'
import Header from '../src/component/header/header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
