import React from 'react'
import {Input} from 'mdbreact'
import SymbolCollapse from './Collapse'
import StockInfo from './StockInfo'
import StockInfoModal from './StockInfoModal'
import axios from 'axios'


class Searchbar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      symbol: '',
      price: '',
      stockInfo: false,
    }
  }

  setCompanySymbol = (symbol) => {
    console.log('company symbol!', symbol)
    this.setState({
      symbol: symbol
    })
  }

  updateSymbol = (e) => {
    let symbol = e.target.value
    this.setState ({
      symbol: symbol
    })
  }

  clickStockInfo = () => {
    this.setState({
      stockInfo: true
    })
  }

  renderStockInfo = () => {
    if(this.state.stockInfo)
    {
      return (<StockInfo />)
    }
    else{
      return ''
    }
  }

  render(){

    return (
      <div className="container" id="searchbar-container">
        <h1>Trade Stocks</h1>
        <p>Enter the company stock/ticker symbol.</p>
        <div className="row" id="company-symbol-search">
          <div className="col-md-4">
            <Input class="form-control" label="Company symbol" value={this.state.symbol} onChange={this.updateSymbol}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <StockInfoModal symbol={this.state.symbol}/>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <button type="button" class="btn btn-success btn-rounded" id="buy-sell" onClick={this.clickStockInfo}>Get Stock Information</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {this.renderStockInfo()}
          </div>
        </div> */}
        <div className = "row">
          <div className = "col-md-8">
            <p id="dont-know">Don't know the company stock/ticker symbol? Click on the button below to find company stock/ticker symbol.</p>
          </div>
        </div>
        <div className = "row">
          <div className = "col-md-12">
            <SymbolCollapse setCompanySymbol={this.setCompanySymbol}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Searchbar
