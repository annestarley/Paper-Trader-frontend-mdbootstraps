import React, { Component } from 'react';
import { Button, Collapse, Input } from 'mdbreact';
import FindSymbol from './FindSymbol'

class SymbolCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
      table: false,
      company: ''
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  enterPressed=(e)=> {
    if (e.key === 'Enter') {
      //this.state.company=e.value;//TODO PASS stuff here?
      //this.state.table= true;
      //this.setState(this.state)
      let company = e.target.value
      let table = true
      this.setState({company, table})
    }
  }

  renderTable = () => {
    if(this.state.table)
    {
      //return (<FindSymbol setCompanySymbol={this.props.setCompanySymbol} setCompanyName={this.getMyCompany}/>)
      console.log('company in Collapse', this.state.company)
      return (<FindSymbol setCompanySymbol={this.props.setCompanySymbol} company={this.state.company}/>)

    }
    else{
      return ''
    }
  }

  getMyCompany=()=>{
    return this.state.company;
  }


  render() {
    return (
      <div>
        <div>
          <Button id="button-stock-symbol" color="primary" class="btn btn-deep-orange" onClick={this.toggle} style={{ marginBottom: "1rem", background: "#f57f17" }}>Look up symbol</Button>
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
