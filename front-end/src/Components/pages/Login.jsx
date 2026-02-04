import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerErrors, setRegisterErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  // === Validation Functions ===
  const validateRegister = () => {
    const errors = {};
    if (!registerData.name) errors.name = "Name is required";
    if (!registerData.email) errors.email = "Email is required";
    else if (!/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(registerData.email))
      errors.email = "Invalid email";
    if (!registerData.password) errors.password = "Password is required";
    else if (registerData.password.length < 6)
      errors.password = "At least 6 characters";
    setRegisterErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateLogin = () => {
    const errors = {};
    if (!loginData.email) errors.email = "Email is required";
    else if (!/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(loginData.email))
      errors.email = "Invalid email";
    if (!loginData.password) errors.password = "Password is required";
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // === Change Handlers ===
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // === Submit Handlers ===
const handleRegister = async (e) => {
  e.preventDefault();
  if (validateRegister()) {
    try {
      const res = await axios.post("https://jaigoldjwellerywbsite-back-end.onrender.com/register", registerData);
      alert("Registration Successful");
      console.log(res.data);

      // ✅ Clear the form
      setRegisterData({ name: "", email: "", password: "" });
      setRegisterErrors({});

      // ✅ Switch to Login form
      setIsRegister(false);
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong");
    }
  }
};


 const handleLogin = async (e) => {
  e.preventDefault();
  if (validateLogin()) {
    try {
      const res = await axios.post("http://localhost:5000/login", loginData);
      alert("Login Successful");
      console.log(res.data);

      // ✅ Clear the login fields
      setLoginData({ email: "", password: "" });
      setLoginErrors({});

      // (Optional) Navigate to a dashboard or homepage here

    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  }
};


  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">{isRegister ? "Register" : "Login"}</h3>
            <form onSubmit={isRegister ? handleRegister : handleLogin}>
              {isRegister && (
                <>
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    className={`form-control ${registerErrors.name ? "is-invalid" : ""}`}
                  />
                  {registerErrors.name && (
                    <div className="invalid-feedback">{registerErrors.name}</div>
                  )}
                  <br />
                </>
              )}

              <label className="form-label">Email*</label>
              <input
                type="email"
                name="email"
                value={isRegister ? registerData.email : loginData.email}
                onChange={isRegister ? handleRegisterChange : handleLoginChange}
                className={`form-control ${
                  isRegister ? registerErrors.email : loginErrors.email ? "is-invalid" : ""
                }`}
              />
              {(isRegister ? registerErrors.email : loginErrors.email) && (
                <div className="invalid-feedback">
                  {isRegister ? registerErrors.email : loginErrors.email}
                </div>
              )}
              <br />

              <label className="form-label">Password*</label>
              <input
                type="password"
                name="password"
                value={isRegister ? registerData.password : loginData.password}
                onChange={isRegister ? handleRegisterChange : handleLoginChange}
                className={`form-control ${
                  isRegister
                    ? registerErrors.password
                      ? "is-invalid"
                      : ""
                    : loginErrors.password
                    ? "is-invalid"
                    : ""
                }`}
              />
              {(isRegister ? registerErrors.password : loginErrors.password) && (
                <div className="invalid-feedback">
                  {isRegister ? registerErrors.password : loginErrors.password}
                </div>
              )}
              <br />

              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ backgroundColor: "#38a0a2" }}
              >
                {isRegister ? "Register" : "Login"}
              </button>

              <p className="mt-3 text-center">
                {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="btn btn-link p-0"
                >
                  {isRegister ? "Login here" : "Register here"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
