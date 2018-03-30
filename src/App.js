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
    username: localStorage.getItem('username') || '',
    email: '',
    password: '',
    token: localStorage.getItem('token') || '',
    networth: 0,
    totalReturns: 0
  }

  backendURL = "http://localhost:8000"
  stockAPI = "https://api.iextrading.com/1.0"

  signUpUser = (event, username, email, password) => {
    event.preventDefault()

    localStorage.setItem('username', username)
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

      localStorage.setItem('username', username)
      this.setState({
        username: localStorage.getItem('username')
      })
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
          localStorage.setItem('token', token)
          this.setState({
            token: token
          })
          axios.get(`${this.backendURL}/funds`)
            .then(res => {
              console.log(res)
              this.setState({networth: res.data.funds})
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
    console.log('TOKEN!!!!!', this.state.token);
    console.log('NETWORTH!!!!', this.state.networth)
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
