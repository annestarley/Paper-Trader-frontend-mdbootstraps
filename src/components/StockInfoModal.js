
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {Input} from 'mdbreact'
import axios from 'axios'

class StockInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      price: '',
      amount: 0
    };

    this.toggle = this.toggle.bind(this);
  }

  findPrice = () => {
    axios.get(`https://api.iextrading.com/1.0//stock/${this.props.symbol}/price`)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }

  toggle() {
    axios.get(`https://api.iextrading.com/1.0//stock/${this.props.symbol}/price`)
      .then(res => {
        console.log(res)
        this.setState({
          modal: !this.state.modal,
          price: res.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getAmount = (e) => {
    console.log(e.target.value);
    let amount = e.target.value
    this.setState({
      amount: amount
    })
  }

  backendURL = 'http://localhost:8000'

  buyStocks = () => {
    let price = this.state.price

    axios.post(`${this.backendURL}/${this.props.symbol}/trade`, {amount: this.state.amount, price: price})
     .then(res => {
       console.log(res);
       this.props.updateFunds()
     })
     .catch(error => {
       console.log(error);
     })
  }

  sellStocks = () => {
    axios.post(`${this.backendURL}/${this.props.symbol}/trade`, {amount: -this.state.amount, price: this.state.price})
     .then(res => {
       console.log(res);
       this.props.updateFunds()
     })
     .catch(error => {
       console.log('there');
       console.log(error);
     })
  }

  render() {
    return (
      <div>
        <Button class="btn btn-success" onClick={this.toggle}>Get Stock Information</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.symbol}</ModalHeader>
          <ModalBody>
            <p>Current Price: ${this.state.price}</p>
            <p>Amount Owned: owned</p>
            <p>Ready to trade?</p>
            <Input class="form-control" label="Enter amount you wish to trade." onChange={this.getAmount}/>
            <div className="row">
              <div className="class-md-6">
                <button type="button" class="btn btn-success btn-rounded" id="buy-sell" onClick={this.buyStocks}>Buy</button>
              </div>
              <div className="class-md-6">
                <button type="button" class="btn btn-success btn-rounded" id="buy-sell" onClick={this.sellStocks}>Sell</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StockInfoModal
