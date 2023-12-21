import './App.css';
import Webpages from './webpages';

function App() {
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
              <a href="/advertising">Lista Anuncios</a>
            </li>
          </ul>
        </nav>
      </header>
      <Webpages></Webpages>
    </div>
  );
}

export default App;
