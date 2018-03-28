import React, { Component } from 'react';
import { Button, Collapse, Input } from 'mdbreact';
import FindSymbol from './FindSymbol'

class SymbolCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
      table: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  enterPressed=(e)=> {
    if (e.key === 'Enter') {
      e.value
      this.setState({table: true})
    }
  }

  renderTable = () => {
    if(this.state.table)
    {
      return (<FindSymbol setCompanySymbol={this.props.setCompanySymbol}/>)
    }
    else{
      return ''
    }
  }


  render() {
    return (
      <div>
        <div>
          <Button id="button-stock-symbol" color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem", background: "#f57f17" }}>Look up symbol</Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="row">
              <div className="col-md-4">
                <Input
                  label="Company name"
                  onKeyPress={this.enterPressed}
                 />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {this.renderTable()}
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default SymbolCollapse;
