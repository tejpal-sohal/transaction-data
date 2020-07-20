/* 
Balance Component Does: 
Renders: 
takes in Balance objects and renders
*/

import React from 'react';

function Balance({balance}) {
  return (
    <div className="container__card--balance" >
      <h2 className="title">Balance</h2>
      <div className="amount">
      <span>£ {balance.amount} </span>
      <span className="small-text">{balance.currency_iso}</span>
      </div>
    </div>
  );
}

export default Balance;
