import React from 'react';
import './App.css';
import CustomTable from './CustomTable';
import Header from './Header';
import AccountSummary from './AccountSummary';
import tableData from './data/tableData';

export default function App() {
  return (
    <div>
      <Header />
      <AccountSummary />
      <CustomTable tableData={tableData} />
    </div>
  );
}

