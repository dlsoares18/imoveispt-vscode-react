import React from 'react';
import ListOfAdvertising from '../components/getAdvertising';
import PostAdvertising from '../components/postAdvertising';

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
      <PostAdvertising/>
    </div>
  );
}

export default Home;