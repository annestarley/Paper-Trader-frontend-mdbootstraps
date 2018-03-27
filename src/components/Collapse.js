import React, { Component } from 'react';
import { Button, Collapse, Input } from 'mdbreact';

class SymbolCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <div>
          <Button id="button-stock-symbol" color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem", background: "#f57f17" }}>Look up symbol</Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="row">
              <div className="col-md-4">
                <Input label="Company name" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Input label="Company country" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Input label="Company security type" />
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default SymbolCollapse;
