import { useFormik } from "formik";
import { useState } from "react";

const Signup = ({ sendDataBack }) => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      values.email !== "test@test.com"
        ? sendDataBack(false)
        : sendDataBack(true);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Signup;
