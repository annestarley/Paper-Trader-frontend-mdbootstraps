import React from 'react';
import EasyTable from 'react-easy-table';
// import 'react-easy-table/sharp-ocean.css'

const Table = (props) => {
  const tHead = [
    {
        title: 'Company Name',
        assignTo: 'companyName',
        id: 'companyName'
    },
    {
        title: 'Exchange',
        assignTo: 'exchange',
        id: 'exchange'
    },
    {
        title: 'Ticker/Symbol',
        assignTo: 'ticker',
        id: 'ticker'
    }
  ];



  const temp = JSON.parse('{"ResultSet":{"Query":"AAPL","Result":[{"symbol":"AAPL","name":"Apple Inc.","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"},{"symbol":"AAPL180329C00170000","name":"AAPL Mar 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.SN","name":"Apple Inc.","exch":"SGO","type":"S","exchDisp":"Santiago Stock Exchange","typeDisp":"Equity"},{"symbol":"AAPL180329C00175000","name":"AAPL Mar 2018 call 175.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180329C00172500","name":"AAPL Mar 2018 call 172.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.MX","name":"Apple Inc.","exch":"MEX","type":"S","exchDisp":"Mexico","typeDisp":"Equity"},{"symbol":"AAPL180329C00167500","name":"AAPL Mar 2018 call 167.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180420C00170000","name":"AAPL Apr 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL190118C00200000","name":"AAPL Jan 2019 call 200.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180518C00185000","name":"AAPL May 2018 call 185.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"}]}}')
  const companies = temp.ResultSet.Result

  const findData = (companies) => {
    let results = []
    companies.map((company, i) => {
      results.push({companyName: company.name, exchange: company.exch, ticker: company.symbol, id: i+1})
    })
    return results
  }

  const data = findData(companies);

  return (
    <EasyTable
      tHead={tHead}
      data={data}
    />
      );
};

export default Table;
