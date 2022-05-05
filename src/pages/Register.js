import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Footer from "../components/Footer";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      changepassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("This field is required"),
      changepassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <div className="flex flex-col h-screen max-h-screen">
      <main className="h-screen" style={{ backgroundColor: "#f0f5f8" }}>
        <div className="md:container md:mx-auto md:px-4">
          <div className="md:flex md:flex-no-wrap md:-mx-6">
            <div className="px-6 mt-24 w-full">
              <div className="bg-white shadow-lg ">
                <div className="flex p-10 space-x-6">
                  <div className="w-2/3">
                    <div>
                      <p className="text-2xl font-semibold">Sign up</p>
                    </div>
                    <form
                      className="flex flex-col"
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="my-2">
                        <label
                          htmlFor="firstName"
                          className="text-gray-400 font-semibold"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          className="bg-indigo-50 mt-2 px-4 py-3 rounded-md w-full border border-gray-300"
                          name="firstName"
                          type="text"
                          placeholder="First name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className="py-1 text-xs text-red-400 font-semibold italic">
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label
                          htmlFor="lastName"
                          className="text-gray-400 font-semibold"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          className="bg-indigo-50 mt-2 px-4 py-3 rounded-md w-full border border-gray-300"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className="py-1 text-xs text-red-400 font-semibold italic">
                            {formik.errors.lastName}
                          </div>
                        ) : null}
                      </div>
                      <div className="my-2">
                        <label
                          htmlFor="email"
                          className="text-gray-400 font-semibold"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          className="bg-indigo-50 mt-2 px-4 py-3 rounded-md w-full border border-gray-300"
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
                        <label
                          htmlFor="password"
                          className="text-gray-400 font-semibold"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          className="bg-indigo-50 mt-2 px-4 py-3 rounded-md w-full border border-gray-300"
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
                      <div className="my-2">
                        <label
                          htmlFor="changepassword"
                          className="text-gray-400 font-semibold"
                        >
                          Confirm Password
                        </label>
                        <input
                          id="changepassword"
                          className="bg-indigo-50 mt-2 px-4 py-3 rounded-md w-full border border-gray-300"
                          type="password"
                          name="password"
                          placeholder="Confirm Password"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.changepassword}
                        />
                        {formik.touched.changepassword &&
                        formik.errors.changepassword ? (
                          <div className="py-1 text-xs text-red-400 font-semibold italic">
                            {formik.errors.changepassword}
                          </div>
                        ) : null}
                      </div>

                      <div className="my-2 flex justify-end">
                        <button
                          type="submit"
                          className="mt-4 bg-gradient-to-tr from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-md text-lg font-bold tracking-wide"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-1/3 border-l pl-4">
                    <div className="text-md font-bold">
                      Who is funding Liveuamap?
                    </div>
                    <p>
                      Liveuamap is editorially independent, we don't have
                      funding from big grantmaking networks, governments or
                      billionaires, so main source of our revenues - from
                      advertising. As advertising revenues drop significantly
                      around Internet, we are looking for new funding sources, -
                      we are offering you to buy account with "features" or
                      simply pay for advertising free version to support our
                      work. Also we are offering services for enterprises that
                      are interesting in security-related geospatial "big data".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Register;
