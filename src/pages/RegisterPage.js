import { Link } from "react-router-dom";
import Login from "../components/Login";

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <Login />
      <p>
        У вас уже есть аккаунт? <Link to="/login">Войти.</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
