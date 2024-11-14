// import "./SignupForm.css";
// import RegisterBackground from "./RegisterBackground";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdMail } from "react-icons/io";
// import { FaLock } from "react-icons/fa";
// import { useState } from "react";
// import axios from "axios";

// function Signupform() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ email: "", password: "" });

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 4;
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     if (!validateEmail(newEmail)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "正しいメールアドレスを入力してください。",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "",
//       }));
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);

//     if (!validatePassword(newPassword)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         password: "パスワードは4文字以上で入力してください。",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         password: "",
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailError = !validateEmail(email)
//       ? "正しいメールアドレスを入力してください。"
//       : "";
//     const passwordError = !validatePassword(password)
//       ? "パスワードは4文字以上で入力してください。"
//       : "";

//     if (emailError || passwordError) {
//       setErrors({ email: emailError, password: passwordError });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/register",
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const token = response.data.token;
//       localStorage.setItem("BearerToken", token);
//       alert("アカウント作成に成功しました");
//       navigate("/LoginSuccess");
//     } catch (err) {
//       alert("アカウントの作成に失敗しました。");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <RegisterBackground />
//       <div className="wrapper">
//         <div className="form-box login">
//           <form action="">
//             <h1>Register</h1>
//             <div className="input-box">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Email"
//                 required
//               />
//               <IoMdMail className="icon" />
//               {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//             </div>
//             <div className="input-box">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//                 required
//               />
//               <FaLock className="icon" />
//               {errors.password && (
//                 <p style={{ color: "red" }}>{errors.password}</p>
//               )}
//             </div>

//             <button type="submit" onClick={handleSubmit}>
//               Register
//             </button>

//             <div className="register-link">
//               <p>アカウントをお持ちの場合は</p>
//               <Link to="/">Login</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signupform;
