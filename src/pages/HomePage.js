import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return isAuth ? (
    <div>
      <h1>Защищенная страница</h1>
      <h2>{`Ваше email: ${email}`}</h2>
      <button onClick={() => dispatch(removeUser())}>Выйти</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
