import React, { useContext } from "react";
import { useFormik } from "formik";
import { useLazyQuery, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { AuthContext } from "context/AuthContext";
import routes from "router/routes";

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Pole wymagane";
  }

  if (!values.password) {
    errors.password = "Pole wymagane";
  }

  return errors;
};

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = () => {
    loginUser();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [loginUser, { loading, data }] = useLazyQuery(LOGIN, {
    variables: { email: formik.values.email, password: formik.values.password },
    onCompleted: () => {
      context.login(data.login);
      history.push(routes.topics);
    },
    onError: (error) => {
      console.log("errpr", error.graphQLErrors);
    },
  });

  const setTestUser = () => {
    loginUser({ variables: { email: "test@test.com", password: "test" } });
  };

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
        <label htmlFor="password">Hasło</label>
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

      <button type="submit">{loading ? "Logowanie..." : "Zaloguj"}</button>
      <button onClick={setTestUser}>Konto testowe</button>
    </form>
  );
};

export default Login;
