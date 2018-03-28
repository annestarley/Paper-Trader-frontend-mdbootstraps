import React from 'react'
import {Input} from 'mdbreact'
import SymbolCollapse from './Collapse.js'


const Searchbar = () => {
  return (
    <div className="container" id="searchbar-container">
      <p>Enter the company stock/ticker symbol.</p>
      <div className="row" id="company-symbol-search">
        <div className="col-md-4">
          <Input label="Company symbol"/>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-12">
          <p>Don't know the company stock/ticker symbol? Click on the button below to find company stock/ticker symbol.</p>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-12">
          <SymbolCollapse />
        </div>
      </div>
    </div>
  )
}

export default Searchbar
