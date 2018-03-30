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
  constructor()
  {
    super();

    this.state={
        companies: [],
        username: localStorage.getItem('username') || 'User',
        email: '',
        password: '',
        token: localStorage.getItem('token') || '',
        networth: parseFloat(localStorage.getItem('networth')) || 0,
        totalReturns: (parseFloat(localStorage.getItem('networth')) - 50000.00) || 0,
        trades:[]
      }
      this.getTrades()
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
          this.updateFunds()
        })
        .catch(error => {
          console.log(error);
        })
    }

  updateFunds =() => {
    this.getTrades()
    axios.get(`${this.backendURL}/funds`)
      .then(res => {
        console.log(res)
        localStorage.setItem('networth', res.data.funds)
        let networth = localStorage.getItem('networth')
        let totalReturns = networth - 50000
        console.log(totalReturns)
        localStorage.setItem('totalReturns', totalReturns)
        this.setState({networth: res.data.funds, totalReturns: totalReturns})
        console.log(this.state.totalReturns)
      })
      // .then(() => {
      //   this.updateTotalReturns()
      // })
      // .catch(error => {
      //   console.log(error);
      // })
  }
  //
  // updateTotalReturns = () => {
  //   this.setState({totalReturns: this.state.networth - 50000})
  // }

  renderUserStocksOnLogin = () => {
    console.log('renderUserStocksOnLogin')
    if (this.state.token !== '') {
      return (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <UserStocks trades={this.state.trades}/>
          </div>
        </div>
      )
    }
  }

  getTrades = () => {
    let results = []
    axios.get(`http://localhost:8000/trades`)
      .then(result => {
        console.log('HERRRRRRRRRREEEEEE!!!!!!!!!!');
        console.log(result);
        this.setState({trades:result.data})
        let buySell
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
            <Searchbar updateFunds={this.updateFunds}/>
          </div>
          <div className="col-md-4">
            <InfoTab username={this.state.username} networth={this.state.networth} totalReturns={this.state.totalReturns}/>
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
