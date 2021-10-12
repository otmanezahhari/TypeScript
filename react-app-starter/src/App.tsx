import React from 'react';

import './App.css';
import { Array, Button, ChildTypes, Hello, Input, PersonObject, ReactChildTypes, Status } from './components';

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
      <Button  handleClick ={(event)=>{
        console.log('ok', event)
      }} />
      <Input value = 'ok'  handleChange = {(event)=>{
        console.log('ok' , event)
      }} />
    </div>
  );
}

export default App;
