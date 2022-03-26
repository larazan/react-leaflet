import React from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checked: [],
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <main className="h-screen" style={{ backgroundColor: "#f0f5f8" }}>
        <div className="md:container md:mx-auto md:px-8">
          <div className="md:flex md:flex-no-wrap md:-mx-6">
            <div className="px-6 mt-24 w-full">
              <div className="flex p-10 space-x-6">
                <div className="w-1/2">
                  <div>
                    <p className="text-2xl font-semibold">Login</p>
                  </div>
                  <form
                    className="flex flex-col"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="my-2">
                      <label
                        htmlFor="email"
                        className="text-gray-400 font-semibold"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="py-1 text-xs text-red-400 font-semibold italic">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="password"
                          className="text-gray-400 font-semibold"
                        >
                          Password
                        </label>
                        <Link to="">
                          <div className="text-sm text-blue-400 font-semibold">
                            Forgot password?
                          </div>
                        </Link>
                      </div>
                      <input
                        id="password"
                        className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="py-1 text-xs text-red-400 font-semibold italic">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <div class="flex items-center">
                        <input
                          id="remember_me"
                          type="checkbox"
                          className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        />
                        <label
                          for="remember_me"
                          className="ml-2 block text-sm leading-5 text-gray-900"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="my-2 flex justify-end">
                      <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-tr from-green-500 to-green-600 text-white px-10 py-3 rounded-md text-lg font-bold tracking-wide"
                      >
                        Login
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm">
                        Dont have an account?{" "}
                        <Link to="/register">
                          <a href="#" className="text-blue-500 font-bold">
                            Sign up
                          </a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="w-1/2 border-l-2 pl-4">
                  <div className="text-md font-bold">
                    Who is funding Liveuamap?
                  </div>
                  <p>
                    Liveuamap is editorially independent, we don't have funding
                    from big grantmaking networks, governments or billionaires,
                    so main source of our revenues - from advertising. As
                    advertising revenues drop significantly around Internet, we
                    are looking for new funding sources, - we are offering you
                    to buy account with "features" or simply pay for advertising
                    free version to support our work. Also we are offering
                    services for enterprises that are interesting in
                    security-related geospatial "big data".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default Login;
