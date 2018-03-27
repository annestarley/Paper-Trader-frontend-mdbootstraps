import React from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem } from 'mdbreact'


class FindSymbol extends React.Component {
  state = {
    companies: []
  }

  // temp = JSON.parse('{"ResultSet":{"Query":"AAPL","Result":[{"symbol":"AAPL","name":"Apple Inc.","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"},{"symbol":"AAPL180329C00170000","name":"AAPL Mar 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.SN","name":"Apple Inc.","exch":"SGO","type":"S","exchDisp":"Santiago Stock Exchange","typeDisp":"Equity"},{"symbol":"AAPL180329C00175000","name":"AAPL Mar 2018 call 175.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180329C00172500","name":"AAPL Mar 2018 call 172.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.MX","name":"Apple Inc.","exch":"MEX","type":"S","exchDisp":"Mexico","typeDisp":"Equity"},{"symbol":"AAPL180329C00167500","name":"AAPL Mar 2018 call 167.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180420C00170000","name":"AAPL Apr 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL190118C00200000","name":"AAPL Jan 2019 call 200.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180518C00185000","name":"AAPL May 2018 call 185.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"}]}}')
  componentDidMount() {
    let companyName = 'Apple'
    // axios.get(`https://autoc.finance.yahoo.com/autoc?query=${companyName}&region=1&lang=en`,
    //   {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     }
    //   })
    // console.log('DID MOUNT');
    fetch(`https://autoc.finance.yahoo.com/autoc?query=${companyName}&region=1&lang=en`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      }
      // mode: 'no-cors'
    })
      .then(res => {
        console.log('response',res);
        return res.json()
      })
      .then(data => {
        console.log('res2',data)
        // this.setState({ companies })
      })
      .catch(err => {
        console.error('error',err)
      })
  }

  // checkForCompanyReturn = (companies) => {
  //   if (companies.length) {
  //     return <p>Are any of these the company you are looking for?</p>
  //   } else {
  //     return <p>No companies found with that name.</p>
  //   }
  // }

  render() {
    // console.log(this.temp.ResultSet.Result);
    // let companies = this.temp.ResultSet.Result
    return (
      <div id="find-symbol">
        {/* {this.checkForCompanyReturn(companies)} */}
        {/* <div className="col-md-4">
        <ListGroup>
          {
            companies.map(company => {
              return (
                <ListGroupItem>{company.name}</ListGroupItem>
                // {company.name} | {company.symbol} | {company.exch}
              )
            })
          }
        </ListGroup>
      </div> */}
        {/* {
          companies.map(company => {
            return (
              <p id="company-info">{company.symbol} | {company.name} ({company.exch})</p>
              // {company.name} | {company.symbol} | {company.exch}
            )
          })
        } */}
      </div>
    )
  }
}

export default FindSymbol
