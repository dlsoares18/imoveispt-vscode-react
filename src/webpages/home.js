import React from 'react';
import GetUser from '../components/getUser';
import ListOfAdvertising from '../components/getAdvertising';
import AdvertisementList from "../components/advertisementList/advertisementList";
import PostAdvertising from '../components/postAdvertising';

//import CreateAdvertising from '../components/postAdvertising';

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
              <a href="/user">Users</a>
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
          </ul>
        </nav>
      </header>

      <hr/>
    {/*<PostAdvertising/>*/}

      
    </div>
  );
}

export default Home;