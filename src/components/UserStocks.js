import React from 'react'
import UserStocksTable from './UserStocksTable'

const UserStocks = (props) => {
  return (
    <div class="user-container">
      <h1>Your Trades</h1>
      <UserStocksTable trades={props.trades}/>
    </div>
  )
}

export default UserStocks
