import { ButtonWithImage } from "@/Components/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+])[A-Za-z\d!@#$%^&*()\-+]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const moveToSignIn = () => {
    router.push("/login");
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex w-full h-screen bg-gray-200 ">
      <div className="flex flex-col w-10/12 md:w-8/12 lg:w-1/4 bg-white rounded-lg h-fit m-auto min-h-1/4 p-4 ">
        <div className="flex flex-col space-y-8 items-center ">
          {/* logo with title */}
          {/* <div className="flex flex-row items-center space-x-4 ">
            <img src="/logo.svg" alt="logo" width={40} height={40} />

            <h1 className="text-md font-semibold ">GyanaGuru</h1>
          </div> */}

          {/* login heading and text */}
          <div className="flex w-full px-2 flex-col mt-8 space-y-2 ">
            <h3 className="text-3xl font-semibold ">Sign Up</h3>
            <h4 className="flex">Welcome to Gyana Guru. </h4>
          </div>

          {/* login form */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => (
              <Form className="flex flex-col space-y-4 w-full mx-4 cursor-pointer">
                <ButtonWithImage
                  buttonName="Continue with Google"
                  icon="/images/google.svg"
                />

                {/* make or with divider */}
                <div className="flex flex-row space-x-4 my-4 items-center">
                  <hr className="w-full border-gray-300" />
                  <h4 className="font-medium text-zinc-500">or</h4>
                  <hr className="w-full border-gray-300" />
                </div>

                {/* login with email and password */}
                <div className="flex flex-col space-y-4">
                  {/* email */}
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`border ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  {/* password */}
                  <div className="flex w-full space-x-2">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className={`w-full border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black`}
                    />
                    <button
                      type="button"
                      onClick={showPasswordToggle}
                      className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black"
                    >
                      {/* <img
                        src={
                          showPassword
                            ? "/images/hide-password.svg"
                            : "/images/show-password.svg"
                        }
                        //alt={showPassword ? "Hide Password" : "Show Password"}
                      /> */}

                      <span className="material-icons-outlined ">
                        {showPassword ? "visibility" : "visibility_off"}
                      </span>
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                  {/* confirm password */}
                  <Field
                    type={showPassword ? "password" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`border ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* submit button */}
                <button
                  type="submit"
                  className="bg-zinc-500 text-white py-2 rounded-lg w-full focus:outline-none"
                >
                  Sign Up
                </button>

                {/* login redirect */}
                <div className="flex flex-row w-full justify-center ">
                  <h4 className="text-md font-medium ">
                    Already have an account?
                  </h4>
                  <button
                    type="button"
                    onClick={moveToSignIn}
                    className="text-zinc-500 ml-2"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
