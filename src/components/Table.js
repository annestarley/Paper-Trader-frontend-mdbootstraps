import React from 'react';
import EasyTable from 'react-easy-table';
// import 'react-easy-table/sharp-ocean.css'

const Table = (props) => {
  const tHead = [
    {
        title: <h3 id="table-header">Company</h3>,
        assignTo: 'companyName',
        id: 'companyName'
    },
    {
        title: <h3 id="table-header">Exch</h3>,
        assignTo: 'exchange',
        id: 'exchange'
    },
    {
        title: <h3 id="table-header">Ticker/Symbol</h3>,
        assignTo: 'ticker',
        id: 'ticker'
    }
  ];



  const companies = props.listCompanies

  // const setCompanySymbol = (e) => {
  //   console.log('clicked!')
  // }

  const findData = (companies) => {
    let results = []
    companies.map((company, i) => {
      results.push(
        {
          companyName: <p id="table-data">{company.name}</p>,
          exchange: <p id="table-data">{company.exch}</p>,
          ticker: <p id="table-data"><a onClick={() => {props.setCompanySymbol(company.symbol)}} id="table-ticker">{company.symbol}</a></p>, id: i+1})
    })
    return results
  }

  const data = findData(companies);

  return (
    <div id="table">
      <EasyTable
        tHead={tHead}
        data={data}
      />
    </div>
      );
};

export default Table;
