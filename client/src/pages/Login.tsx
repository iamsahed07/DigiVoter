// import { Paper, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getUserData, getUserDetails, login } from "../features/userSlice";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginChoice, setLoginChoice] = useState("email");

//   // const userLogin = useSelector((store) => store.user);
//   // const dispatch = useDispatch();

//   // const navigate = useNavigate();
//   // const { isError, authInfo, userData } = userLogin;

//   // useEffect(() => {
//   //   setEmail("");
//   //   setStudentPhoneNumber("");
//   //   setPassword("");
//   // }, [loginChoice]);

//   // useEffect(() => {
//   //   console.log(Object.keys(authInfo).length);
//   //   if (Object.keys(authInfo).length !== 0) {
//   //     console.log("object");
//   //     dispatch(getUserDetails());
//   //     console.log(Object.keys(userData).length);
//   //     console.log(userData);
//   //     if (Object.keys(userData).length !== 0) navigate("application-form");
//   //   }
//   // }, [authInfo, navigate, userData]);

//   // const handleLoginSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   loginChoice === "email"
//   //     ? dispatch(login({ email, password }))
//   //     : dispatch(login({ studentPhoneNumber, password }));
//   // };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       {isError && <h2>{isError}</h2>}
//       <Paper
//         elevation={5}
//         sx={{ borderRadius: "10px" }}
//         className="max-w-sm px-5 h-fit "
//       >
//         <div className="flex my-4">
//           <img
//             src="./src/assets/MAKAUT_Logo.png"
//             className="w-12 mr-7"
//             alt="Makaut logo"
//           />
//           <h2 className="text-xl font-semibold ">
//             Maulana Abul Kalam Azad University of Technology
//           </h2>
//         </div>
//         <form onSubmit={handleLoginSubmit}>
//           {loginChoice === "email" ? (
//             <TextField
//               margin="normal"
//               fullWidth
//               type="email"
//               label="Email"
//               name="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               required
//               variant="outlined"
//             />
//           ) : (
//             <TextField
//               margin="normal"
//               fullWidth
//               type="text"
//               label="Phone number"
//               name="studentPhoneNumber"
//               value={studentPhoneNumber}
//               onChange={(e) => {
//                 setStudentPhoneNumber(e.target.value);
//               }}
//               required
//               variant="outlined"
//             />
//           )}

//           <TextField
//             margin="normal"
//             fullWidth
//             type="password"
//             label="Password"
//             name="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             required
//             variant="outlined"
//           />
//           <button
//             type="submit"
//             className=" mt-5 mb-2 w-[100%] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  shadow-md transition duration-300 ease-in-out transform hover:scale-105 rounded-xl"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 mb-2 text-sm">
//           <p className="my-3 text-xs text-center">
//             Login using
//             {loginChoice === "email" ? (
//               <label htmlFor="number" className="mx-1 underline">
//                 <input
//                   type="radio"
//                   id="number"
//                   value="number"
//                   checked={loginChoice === "number"}
//                   onChange={() => setLoginChoice("number")}
//                   className="hidden "
//                 />
//                 phone number
//               </label>
//             ) : (
//               <label htmlFor="number" className="mx-1 underline">
//                 <input
//                   type="radio"
//                   id="number"
//                   value="number"
//                   checked={loginChoice === "email"}
//                   onChange={() => setLoginChoice("email")}
//                   className="hidden "
//                 />
//                 email
//               </label>
//             )}
//           </p>
//           <button>Forgot Password?</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       </Paper>
//     </div>
//   );
// };

// export default Login;

import { Button, Input, Paper, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import Header from "../components/Header";

function Login() {
  // const [adhar,setAdhar]=useState('');
  // const [otp,setOtp] = useState('');
  return (
    <>
    {/* <Header/> */}
    <div
      style={{
        backgroundColor: "#9FB6F9",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <img
        src="./src/assets/home_page.png"
        alt="login page image"
        style={{
          width: "30%",
          // height: "30%",
        }}
      />
      <Formik
        initialValues={{ adhar: "", otp: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  borderRadius: "5%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 20px 0",
                  boxShadow: "12px 12px 50px 1px rgba(0,0,0,0.2)",
                }}
              >
                <h2>Log in to your account!</h2>
                <div
                  style={{
                    padding: "0 0 25px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <button
                    style={{
                      fontSize: "0.9rem",
                      borderRadius: "5%",
                      color: "#116ACF",
                      border: "none",
                      padding: "10px 18px ",
                      backgroundColor: "white",
                    }}
                  >
                    Moblie Number
                  </button>
                  <button
                    style={{
                      fontSize: "0.9rem",
                      borderRadius: "5%",
                      color: "white",
                      border: "none",
                      padding: "10px 18px ",
                      backgroundColor: "#116ACF",
                    }}
                  >
                    Aadhar number
                  </button>
                </div>
                <input
                  type="email"
                  name="adhar"
                  placeholder="Enter Aadhar Number"
                  onChange={handleChange}
                  value={values.adhar}
                  style={{
                    width: "20rem",
                    height: "1.5rem",
                    paddingLeft: "15px",
                  }}
                />
                <input
                  pattern="\d{6}"
                  name="otp"
                  placeholder="6 digit security PIN"
                  onChange={handleChange}
                  value={values.otp}
                  style={{
                    margin: "10px 0 25px",
                    width: "20rem",
                    height: "1.5rem",
                    paddingLeft: "15px",
                  }}
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    marginBottom: "10px",
                    alignSelf: "flex-start",
                  }}
                >
                  Forgot security PIN?
                </button>
                <Button
                  style={{
                    marginBottom: "25px",
                    backgroundColor: "#116ACF",
                    color: "white",
                    marginBottom: "30px",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
              <span style={{ alignSelf: "center" ,
            marginTop:"20px",}}>
                Do not have an account?
                <button style={{ border: "none", background: "none" }}>
                  Sign Up
                </button>
              </span>
            </div>
          </form>
        )}
      </Formik>
    </div>
    </>
  );
}

export default Login;
