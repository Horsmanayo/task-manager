import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; password: string }) => {
    navigate("/dashboard");
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="bg-white w-[500px] h-[600px] rounded-lg p-[24px]">
      <header className="text-center text-2xl font-bold">Login</header>
      <form onSubmit={formik.handleSubmit} className="mt-[24px]">
        <div className="mb-[24px]">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border border-gray-300 rounded-lg p-[8px] focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-[24px]">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full border border-gray-300 rounded-lg p-[8px] focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg p-[8px] focus:outline-none focus:ring focus:ring-blue-400 disabled:bg-slate-500 m"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
