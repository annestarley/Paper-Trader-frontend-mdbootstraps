
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {Input} from 'mdbreact'

class StockInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button class="btn btn-success" onClick={this.toggle}>Get Stock Information</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Symbol</ModalHeader>
          <ModalBody>
            <p>Current Price: $Price</p>
            <p>Amount Owned: owned</p>
            <p>Ready to trade?</p>
            <Input class="form-control" label="Enter amount you wish to trade."/>
            <div className="row">
              <div className="class-md-6">
                <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Buy</button>
              </div>
              <div className="class-md-6">
                <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Sell</button>
              </div>
            </div>
            {/* <div className="container" id="stock-info-container">
              <div className="row">
                <div className="class-md-12">
                  <p>Current Price: $Price</p>
                </div>
              </div>
              <div className="row">
                <div className="class-md-12">
                  <p>Amount Owned: owned</p>
                </div>
              </div>
              <div className="row">
                <div className="class-md-12">
                  <p>Ready to trade?</p>
                </div>
              </div>
              <div className="row">
                <div className="class-md-12">
                  <Input class="form-control" label="Amount you wish to trade."/>
                </div>
              </div>
              <div className="row">
                <div className="class-md-6">
                  <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Buy</button>
                </div>
                <div className="class-md-6">
                  <button type="button" class="btn btn-success btn-rounded" id="buy-sell">Sell</button>
                </div>
              </div> */}
            {/* </div> */}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StockInfoModal
