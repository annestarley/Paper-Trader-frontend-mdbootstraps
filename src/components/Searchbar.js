import React from 'react'
import {Input} from 'mdbreact'
import SymbolCollapse from './Collapse.js'


const Searchbar = () => {
  return (
    <div className="container" id="searchbar-container">
      <p>Enter the company stock/ticker symbol.</p>
      {/* <form id="searchbar" className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Company symbol" aria-label="Search"/>
      </form> */}
      <div className = "row" >
        <div className="col-md-4">
          <Input label="Company symbol"/>
        </div>
      </div>
      <p>Don't know the company stock/ticker symbol? Click on the button below to find company stock/ticker symbol.</p>
      <SymbolCollapse />
    </div>
  )
}

export default Searchbar
