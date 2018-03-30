import React from 'react'
import {View} from 'mdbreact'

const infoTab = (props) => {
  console.log(props.totalReturns)


  let totalReturns
  let totalReturnString
  if (props.totalReturns === 0) totalReturnString = '$0.00'
  if(props.totalReturns < 0) {
    totalReturns = (-props.totalReturns.toFixed(2))
    totalReturnString = `-$${totalReturns}`
  }
  else {
    totalReturns = props.totalReturns.toFixed(2)
    totalReturnString = `$${totalReturns}`
  }

  console.log(totalReturns)
  console.log(totalReturnString);
  return (
    <View zoom>
      <div className="container">
        <h4 id="info-title">{props.username || 'User'}</h4>
        <div className="info-tab">
          <p>Networth: ${props.networth?props.networth.toFixed(2):'0.00'}</p>
          <p>Total Returns: {totalReturnString}</p>
          {/* ${props.totalReturns?props.totalReturns.toFixed(2):'0.00'} */}
          {/* <p>Trades: trades</p> */}
        </div>
      </div>
    </View>
  )
}

export default infoTab
