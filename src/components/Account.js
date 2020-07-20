/* 
Account Component Does: 

Renders: 
Balance Components
Provider  Components
Transactions  Components
passes data objects to each component
*/

import React from 'react';
import Balance from './Balance'
import Provider from './Provider'
import Transactions from './Transactions'

function Account({ data }) {
  return (
    <div className="container__card">
      <Provider provider={data.provider} />
      <Balance balance={data.balance} />
      <Transactions transactions={data.transactions} />
    </div>
  );
}

export default Account;
