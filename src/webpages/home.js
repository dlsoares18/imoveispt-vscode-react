import React from 'react';
import GetUser from '../components/getUser';
import ListOfAdvertising from '../components/getAdvertising';
import CreateAdvertising from '../components/postAdvertising';

function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/advertising">Lista Anuncios</a>
            </li>
            <li>
              <a href="/register">Cadastrar Conta</a>
            </li>
          </ul>
        </nav>
      </header>

      <hr/>

      <ListOfAdvertising/>
      <GetUser/>
      <CreateAdvertising/>
    </div>
  );
}

export default Home;