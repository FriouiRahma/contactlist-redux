import React from 'react';
import './App.css';
import Contactlist from './component/contactlist';
import AddContact from'./component/Contact';

function App() {
  return (
    <div className="App">
      <Contactlist/>
      <AddContact/>
     
    </div>
  );
}

export default App;
