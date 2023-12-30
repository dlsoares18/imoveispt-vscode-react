import React from 'react';
import ListOfAdvertising from '../components/getAdvertising';

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
              <a href="/register">Cadastrar Conta</a>
            </li>
            <li>
              <a href="/login">Fazer Login</a>
            </li>
            <li>
              <a href="/advertisements">Anúncios</a>
            </li>
            <li>
              <a href="/newadvertisement">Criar anúncio</a>
            </li>
          </ul>
        </nav>
      </header>

      <hr/>
      <ListOfAdvertising/>
    </div>
  );
}

export default Home;