import React from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem } from 'mdbreact'
import Table from './Table'
// import 'react-easy-table/sharp-ocean.css'


class FindSymbol extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companies: [],
      //companyName: props.setCompanyName
    }
  }

  checkForCompanyReturn = (companies) => {
    if (companies.length) {
      return <p>Top results for your search. Are any of these the company you are looking for?</p>
    } else {
      return <p>No companies found with that name.</p>
    }
  }

  update = (x) =>{
    this.state.companies=x;
    this.setState(this.state);
  }

  getInfo= (companyToSearchFor)=>{
    return axios.get('http://localhost:8000/find/'+companyToSearchFor).then(x=>{
      console.log(x);
      this.update(x);
    })
  }

  render() {
    if(this.state.companies.length===0)
    {
      console.log('companies all sorts of failed.');
      console.log(this.props.company);
      this.getInfo(this.props.company);
      return '';
    }
    let companies = this.state.companies.data
    return (
      <div id="find-symbol">
        {this.checkForCompanyReturn(companies)}
        <Table setCompanySymbol={this.props.setCompanySymbol} listCompanies={companies} />
      </div>
    )
  }
}

export default FindSymbol
