import React from 'react';
import GetUser from '../components/getUser';
import ListOfAdvertising from '../components/getAdvertising';
import CreateAdvertising from '../components/postAdvertising';

function Home() {
  return (
    <div>
      <ListOfAdvertising/>
      <GetUser/>
      <CreateAdvertising/>
    </div>
  );
}

export default Home;