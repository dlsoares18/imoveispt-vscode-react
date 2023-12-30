import LoginForm from "../components/loginForm/loginForm";
import PublicNavBar from "../components/publicNavBar/publicNavBar";

function Login() {
    return (
      <div>
        {/* Colocar aqui o elemento barra de navegação que irei criar para anônimos contendo apenas o
        logo de imóveis pt e um ícone de user e o link entrar*/}
        <PublicNavBar/>
        <LoginForm/>
      </div>
    );
  }
  
  export default Login;