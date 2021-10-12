import React from 'react';

import './App.css';
import { Array, ChildTypes, Hello, PersonObject, ReactChildTypes, Status } from './components';

function App() {
  const PersonName = {
    first : 'ot',
    last : 'oz'
  }

  const PersonList = [
    {
    first : 'ot',
    last : 'oz'
  },
  {
    first : 'ot',
    last : 'oz'
  }
  ]
  return (
    <div className="App">
      <Hello name = "otmane" id = {5} />
      <PersonObject name={PersonName} />
      <Array liste = {PersonList}/>
      <Status  status="nok"/>
      <ChildTypes> Hello from child</ChildTypes>
      <ReactChildTypes>
        <ChildTypes>Hello from React child types</ChildTypes>
      </ReactChildTypes>
    </div>
  );
}

export default App;
