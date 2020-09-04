import React from "react";
import { useFormik } from "formik";

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

const onSubmit = (values) => {
  console.log(values);
};

const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label for="email">Email</label>
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
        <label for="password">Hasło</label>
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

      <button>Zaloguj</button>
    </form>
  );
};

export default Login;
