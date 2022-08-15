import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const Forgot = () => {
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
    <div className="flex flex-col h-screen max-h-screen">
      <main className="h-screen" style={{ backgroundColor: "#f0f5f8" }}>
        <div className="md:container md:mx-auto md:px-8">
          <div className="md:flex md:flex-no-wrap md:-mx-6">
            <div className="px-6 mt-10 md:mt-24 w-full">
              <div className="flex p-10 space-x-6">
                <div className="w-full md:w-1/2">
                  <div>
                    <p className="text-2xl font-semibold">Forgot Password</p>
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
                   
                    <div className="my-2 flex justify-end">
                      <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-tr from-green-500 to-green-600 text-white px-10 py-3 rounded-md text-lg font-bold tracking-wide"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm">
                        Already have an account?{" "}
                        <Link to="/login">
                          <span className="text-blue-500 font-bold">
                            Login
                          </span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="w-1/2  border-l-2 pl-4 hidden md:block">
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
    </div>
    </>
  )
}

export default Forgot