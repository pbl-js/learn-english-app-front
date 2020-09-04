import React from "react";

const Register = () => {
  return (
    <form>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Podaj adres email" />
      </div>

      <div>
        <label for="email">Hasło</label>
        <input type="email" id="email" placeholder="Podaj hasło" />
      </div>

      <div>
        <label for="email">Potwierdź hasło</label>
        <input type="email" id="email" placeholder="Podaj hasło" />
      </div>
      <button>Zarejestruj</button>
    </form>
  );
};

export default Register;
