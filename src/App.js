import React from 'react';
import Login from './components/login'
import './App.sass';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <body className="container App-body">
        <Login />
      </body>
    </div>
  );
}

export default App;
