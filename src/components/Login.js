import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => setError(false), 5000);
  }, [error]);

  const handleLogin = async (email, pass) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const { user } = userCredential;
      dispatch(
        setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      );
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Form title="Создать" handleClick={handleLogin} />
      {error && (
        <Alert severity="error" sx={{ width: "50%" }}>
          {
            "Неверный формат почты или пароля. Пароль должен быть не менее 6 символов"
          }
        </Alert>
      )}
    </>
  );
};

export default Login;
