import React from 'react'
import UserStocksTable from './UserStocksTable'

const UserStocks = () => {
  return (
    <div class="user-container">
      <h1>Your Trades</h1>
      <UserStocksTable />
    </div>
  )
}

export default UserStocks
