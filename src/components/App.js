/* 
App Component Does: 

loading state is set by fetchData()
data state is set by fetchData()

FetchData handles errors in case of url errors

passes Data to Accounts Component
*/

import React, { useEffect, useState } from 'react';

import '../styles/App.scss'
import Loader from './Loader'
import Account from './Account'


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(
      "http://www.mocky.io/v2/5c62e7c33000004a00019b05"
    ).catch((err) => console.log(err));
    let response = await res.json();
    setData(response); // parse json
    setLoading(false)
  };


  return (
    <div className="container">
      { loading !== false ? <Loader/> :<Account data={data} /> }
    </div>
  );
}

export default App;
