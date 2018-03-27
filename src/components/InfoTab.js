import React from 'react'
import {View} from 'mdbreact'

const infoTab = () => {
  return (
    <View zoom>
      <div className="container">
        <h4 id="title">Username</h4>
        <div className="info-tab">
          <p>Networth: $networth</p>
          <p>Total Returns: $total returns</p>
          <p>Total Losses: $total losses</p>
          <p>Trades: trades</p>
        </div>
      </div>
    </View>
  )
}

export default infoTab
