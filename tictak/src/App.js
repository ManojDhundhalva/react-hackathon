// import Signin from './Sign_In.jsx';
// import Signup from './Sign_up.jsx';

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState('hello world');

  const fetchdata = async () => {
    let request = await fetch('/user/create-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  useEffect(() => {
    fetchdata();
  }, []);




  return (
    <div>
      {/* <Signin />
      <Signup /> */}
    </div>
  );
}

export default App;
