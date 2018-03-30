import React from 'react'
import {View} from 'mdbreact'

const infoTab = (props) => {
  return (
    <View zoom>
      <div className="container">
        <h4 id="info-title">Username</h4>
        <div className="info-tab">
          <p>Networth: ${props.networth?props.networth.toFixed(2):'0.00'}</p>
          <p>Total Returns: ${props.totalReturns?props.totalReturns.toFixed(2):'0.00'}</p>
          {/* <p>Trades: trades</p> */}
        </div>
      </div>
    </View>
  )
}

export default infoTab
