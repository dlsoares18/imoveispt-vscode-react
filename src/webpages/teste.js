import React from 'react';
import axios from 'axios';
import ListOfAdvertising from '../components/listOfAdvertising';
import CreateAdvertising from '../components/createAdvertising';

function Teste() {
  return (
    <div>
      <h1>Meu Projeto React</h1>
      <ListOfAdvertising></ListOfAdvertising>
      <CreateAdvertising></CreateAdvertising>
    </div>
  );
}

export default Teste;