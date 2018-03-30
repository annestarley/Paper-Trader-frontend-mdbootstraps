import React from 'react'
import EasyTable from 'react-easy-table';
import axios from 'axios'

const UserStocksTable = (props) => {


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
    ,
    {
        title: <h3 id="user-table-header">Buy/Sell</h3>,
        assignTo: 'buySell',
        id: 'buySell'
    }
  ];

  // const data = [
  //   {
  //     id: 1, symbol: <p id="user-table-data">symbol</p>,
  //     value: <p id="user-table-data">value</p>,
  //     amount: <p id="user-table-data">amount</p>,
  //     buySell: <p id="user-table-data">buy</p>,
  //     // tradetime: <p id="user-table-data">tradetime</p>
  //   }
  // ]

  console.log(props.trades.data);
  let tradeData = props.trades
  let dataStuff =[]
  let tradeAmount
  let buySell
  tradeData.map((trade) => {
    if (trade.amount < 0) {
      tradeAmount = -trade.amount
      buySell = 'sell'
    } else {
      tradeAmount = trade.amount
      buySell = 'buy'
    }
    let obj = {
      id: 1, symbol: <p id="user-table-data">{trade.symbol}</p>,
      value: <p id="user-table-data">{trade.value}</p>,
      amount: <p id="user-table-data">{tradeAmount}</p>,
      buySell: <p id="user-table-data">{buySell}</p>,
      // tradetime: <p id="user-table-data">tradetime</p>
    }
    dataStuff.push(obj)
  })

  // let dataStuff = [
  //   {
  //     id: 1, symbol: <p id="user-table-data">symbol</p>,
  //     value: <p id="user-table-data">value</p>,
  //     amount: <p id="user-table-data">amount</p>,
  //     // buySell: <p id="user-table-data">buy</p>,
  //     // tradetime: <p id="user-table-data">tradetime</p>
  //   }
  // ]

  return (
    <div className="row justify-content-center">
      <table className = "col-12" id="user-table">
        <EasyTable
          tHead={tHead}
          data={dataStuff}
        />
      </table>
    </div>
  )
}

export default UserStocksTable
