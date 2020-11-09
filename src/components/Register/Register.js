import React, { useContext } from "react";
import { useFormik } from "formik";
import { useMutation, gql } from "@apollo/client";
import { AuthContext } from "context/AuthContext";
import { useHistory } from "react-router-dom";
import routes from "router/routes";

const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    createUser(userInput: { email: $email, password: $password }) {
      token
    }
  }
`;

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Pole wymagane";
  }

  if (!values.password) {
    errors.password = "Pole wymagane";
  } else if (values.password.length < 7) {
    errors.password = "Hasło musi mieć przynajmniej 7 znaków";
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = "Pole wymagane";
  }

  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = "Hasła muszą być takie same";
  }

  return errors;
};

const Register = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [createUser, { data, loading }] = useMutation(REGISTER, {
    variables: { email: formik.values.email, password: formik.values.password },
    onCompleted: (data) => {
      console.log(data);
      context.login(data.createUser);
      history.push(routes.topics);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function onSubmit() {
    createUser();
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Podaj adres email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />

        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Hasło</label>
        <input
          type="password"
          id="password"
          placeholder="Podaj hasło"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />

        {formik.errors.password && formik.touched.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="repeatPassword">Potwierdź hasło</label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="Potwierdź hasło"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          onBlur={formik.handleBlur}
        />

        {formik.errors.repeatPassword && formik.touched.repeatPassword && (
          <div>{formik.errors.repeatPassword}</div>
        )}
      </div>
      <button type="submit">
        {loading ? "Rejestracja..." : "Zarejestruj"}
      </button>
      Uwaga! Czas rejestracji wynosi 10-20 sec. Wiem gdzie leży błąd i jest on
      na liście poprawek.
    </form>
  );
};

export default Register;
