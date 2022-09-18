import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "300px", marginBottom: "5px" }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ width: "300px  " }}
      />
      <button
        onClick={() => handleClick(email, pass)}
        style={{ marginTop: "20px  " }}
      >
        {title}
      </button>
    </div>
  );
};

export default Form;
