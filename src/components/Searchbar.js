import React from 'react'
import {Input} from 'mdbreact'
import SymbolCollapse from './Collapse.js'


class Searchbar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      symbol: ''
    }
  }

  setCompanySymbol = (symbol) => {
    console.log('company symbol!', symbol)
    this.setState({
      symbol: symbol
    })
  }

  render(){
    console.log(this.state.symbol)

    return (
      <div className="container" id="searchbar-container">
        <h1>Trade Stocks</h1>
        <p>Enter the company stock/ticker symbol.</p>
        <div className="row" id="company-symbol-search">
          <div className="col-md-4">
            <Input class="form-control" label="Company symbol" value={this.state.symbol}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Buy</button>
            <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Sell</button>
          </div>
        </div>
        <div className = "row">
          <div className = "col-md-12">
            <p>Don't know the company stock/ticker symbol? Click on the button below to find company stock/ticker symbol.</p>
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
