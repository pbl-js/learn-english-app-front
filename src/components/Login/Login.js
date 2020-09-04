import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Podaj adres email" />
      </div>
      <div>
        <label for="email">Hasło</label>
        <input type="email" id="email" placeholder="Podaj hasło" />
      </div>
      <button>Zaloguj</button>
    </>
  );
};

export default Login;
