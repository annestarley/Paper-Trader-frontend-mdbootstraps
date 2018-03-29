import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarFeatures from './components/NavbarFeatures'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import InfoTab from './components/InfoTab'
import Graphs from './components/Graphs'
import Watching from './components/Watching'
import Footer from './components/Footer'
import UserStocks from './components/UserStocks'

import axios from 'axios'

import LineChart from './components/charts/LineChart'

// import 'react-easy-table/sharp-ocean.css'

class App extends Component {
  state = {
    companies: [],
    username: '',
    email: '',
    password: ''

  }

  backendURL = "http://localhost:8000"

  signUpUser = (event, username, email, password) => {
    event.preventDefault()

    axios.post(`${this.backendURL}/newUser`, { username: username, password: password, email: email })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }

  logInUser = (event, username, password) => {
    event.preventDefault()
    console.log('clicked')
    console.log(username, password)

    axios.post(`${this.backendURL}/login`, {username, password})
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="App">
        <NavbarFeatures signUpUser={this.signUpUser} logInUser={this.logInUser}/>
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Searchbar />
          </div>
          <div className="col-md-4">
            <InfoTab />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <UserStocks />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <Graphs />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Watching />
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
