import { Link } from "react-router-dom";
import Form from "../components/Form";
import SigninUp from "../components/SignInUp";

const LoginPage = () => {
  return (
    <div>
      <h1>Вход</h1>
      <SigninUp />
      <p>
        Нет аккаунта? <Link to="/register">Зарегестрируйтесь!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
