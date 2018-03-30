import React from 'react'
import {View} from 'mdbreact'

const infoTab = (props) => {

  let totalReturns
  if (props.totalReturns === 0) totalReturns = '$0.00'
  if(props.totalReturns < 0) totalReturns = `-$${-(parseInt(props.totalReturns)).toFixed(2)}`
  else totalReturns = `$${props.totalReturns.toFixed(2)}`

  console.log(totalReturns)
  console.log(props.totalReturns)
  return (
    <View zoom>
      <div className="container">
        <h4 id="info-title">{props.username || 'User'}</h4>
        <div className="info-tab">
          <p>Networth: ${props.networth?props.networth.toFixed(2):'0.00'}</p>
          <p>Total Returns: {totalReturns}</p>
          {/* ${props.totalReturns?props.totalReturns.toFixed(2):'0.00'} */}
          {/* <p>Trades: trades</p> */}
        </div>
      </div>
    </View>
  )
}

export default infoTab
