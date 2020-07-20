/* 

Provider Component Does: 

Renders: 
takes in Provider objects and renders
*/



import React from 'react';
import profileImage from "../images/rambo2.png";
import MasterCard from "../images/mc.png";

function Provider({provider}) {
  return (
    <div className="container__card--provider" >
       <img className="avatar" src={profileImage}/>
       <img className="master-card" src={MasterCard}/>
       <h1 className="title">{provider.title}</h1>
       <p className="title--sub">{provider.description}</p>
       
       <span className="title--sub"><small>Account Number</small></span>
       <p className="number">{provider.account_number}</p>

       <span className="title--sub"><small>Sort Code</small></span>
       <p className="number">{provider.sort_code}</p>

    </div>
  );
}

export default Provider;
