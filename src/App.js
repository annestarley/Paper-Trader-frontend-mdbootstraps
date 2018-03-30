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
    password: '',
    token: '',
    networth: 12,
    totalReturns: 0
  }

  backendURL = "http://localhost:8000"
  stockAPI = "https://api.iextrading.com/1.0"

  signUpUser = (event, username, email, password) => {
    event.preventDefault()

    this.setState({
      username,
      email,
      password
    })
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

    // axios.post(`${this.backendURL}/login`, {username, password})
    axios({
      method: 'post',
      data: {username, password},
      url: `${this.backendURL}/login`,
      headers: {
        'Acess-Control-Expose-Headers': 'Auth'
      }
    })
      .then(res => {
        let token = res.headers.auth.split(' ')[1]
        this.setState({
          token: token
        })
        console.log(this.state.token)
        axios.get(`${this.backendURL}/funds`,'' , { headers: {token: this.state.token} })
          .then(res => {
            console.log('response', res);
          })
      })
      .catch(error => {
        console.log(error);
      })
  }

  renderUserStocksOnLogin = () => {
    console.log('renderUserStocksOnLogin')
    if (this.state.token !== '') {
      return (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <UserStocks />
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.state.username, 'USERNAME!!!')
    return (
      <div className="App">
        <NavbarFeatures signUpUser={this.signUpUser} logInUser={this.logInUser}/>
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Searchbar />
          </div>
          <div className="col-md-4">
            <InfoTab username={this.state.username} networth={this.state.networth} totalReturn={this.state.totalReturns}/>
          </div>
        </div>
        {this.renderUserStocksOnLogin()}
        {/* <div className="row justify-content-center">
          <div className="col-md-12">
            <UserStocks />
          </div>
        </div> */}
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
