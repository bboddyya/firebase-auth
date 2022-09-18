import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

const SigninUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => setError(false), 5000);
  }, [error]);

  const handleSignin = async (email, pass) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
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
      <Form title={"Войти"} handleClick={handleSignin} />
      {error && (
        <Alert severity="error" sx={{ width: "50%" }}>
          Неправильная почта или пароль{" "}
        </Alert>
      )}
    </>
  );
};

export default SigninUp;
