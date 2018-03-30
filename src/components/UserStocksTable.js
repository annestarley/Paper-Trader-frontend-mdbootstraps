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
        title: <h3 id="user-table-header">Symbol</h3>,
        assignTo: 'symbol',
        id: 'symbol'
    },
    {
        title: <h3 id="user-table-header">Tradetime</h3>,
        assignTo: 'exchange',
        id: 'exchange'
    },
    {
        title: <h3 id="user-table-header">Value</h3>,
        assignTo: 'ticker',
        id: 'ticker'
    },
    {
        title: <h3 id="user-table-header">Amount</h3>,
        assignTo: 'amount',
        id: 'amount'
    },
    {
        title: <h3 id="user-table-header">Value</h3>,
        assignTo: 'value',
        id: 'value'
    },
    {
        title: <h3 id="user-table-header">Value At Purchase</h3>,
        assignTo: 'valuePur',
        id: 'valuePur'
    }
  ];

  const data = [{id: 1, companyName: <p id="user-table-data">companyName</p>, exchange: <p id="user-table-data">exchange</p>, ticker: <p id="user-table-data">ticker</p>, amount: <p id="user-table-data">amount</p>, value: <p id="user-table-data">value</p>, valuePur: <p id="user-table-data">valuePur</p>}]

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
