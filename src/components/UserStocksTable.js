import React from 'react'
import EasyTable from 'react-easy-table';

const UserStocksTable = () => {

  // const tHead = [
  //   {
  //       title: <h3 id="user-table-header">Company</h3>,
  //       assignTo: 'companyName',
  //       id: 'companyName'
  //   },
  //   {
  //       title: <h3 id="user-table-header">Exch</h3>,
  //       assignTo: 'exchange',
  //       id: 'exchange'
  //   },
  //   {
  //       title: <h3 id="user-table-header">Ticker/Symbol</h3>,
  //       assignTo: 'ticker',
  //       id: 'ticker'
  //   },
  //   {
  //       title: <h3 id="user-table-header">Amount</h3>,
  //       assignTo: 'amount',
  //       id: 'amount'
  //   },
  //   {
  //       title: <h3 id="user-table-header">Value</h3>,
  //       assignTo: 'value',
  //       id: 'value'
  //   },
  //   {
  //       title: <h3 id="user-table-header">Value At Purchase</h3>,
  //       assignTo: 'valuePur',
  //       id: 'valuePur'
  //   }
  // ];

  const tHead = [
    {
        title: <h3 id="user-table-header">Stock Ticker/Symbol</h3>,
        assignTo: 'symbol',
        id: 'symbol'
    },
    {
        title: <h3 id="user-table-header">Value Per Stock</h3>,
        assignTo: 'value',
        id: 'value'
    },
    {
        title: <h3 id="user-table-header">Amount Purchased</h3>,
        assignTo: 'amount',
        id: 'amount'
    }
    // ,{
    //     title: <h3 id="user-table-header">TradeTime</h3>,
    //     assignTo: 'tradetime',
    //     id: 'tradetime'
    // }
  ];

  const data = [
    {
      id: 1, symbol: <p id="user-table-data">symbol</p>,
      value: <p id="user-table-data">value</p>,
      amount: <p id="user-table-data">amount</p>,
      // tradetime: <p id="user-table-data">tradetime</p>
    }
  ]

  // const findData = (companies) => {
  //   let results = []
  //   companies.map((company, i) => {
  //     results.push(
  //       {
  //         companyName: <p id="table-data">{company.name}</p>,
  //         exchange: <p id="table-data">{company.exch}</p>,
  //         ticker: <p id="table-data"><a onClick={() => {props.setCompanySymbol(company.symbol)}} id="table-ticker">{company.symbol}</a></p>, id: i+1})
  //   })
  //   return results
  // }



  return (
    <div className="row justify-content-center">
      <table className = "col-12" id="user-table">
        <EasyTable
          tHead={tHead}
          data={data}
        />
      </table>
    </div>
  )
}

export default UserStocksTable
