import React, { useState } from "react";
import CustomInput from "../CustomInput";
import useUser from "./ContexApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userContext, setUserContext] = useUser();
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate()
  function handleInput(e) {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleLogin() {
    if (
      login.email === userContext.email &&
      login.password === userContext.password
    ) {
        navigate("/account-settings");
    }else{
        navigate("/create-account");
    }
  }

  return (
    <div className="container">
      <div className="form-card">
        <div className="card" style={{ justifyContent: "space-between" }}>
          <div>
            <h1 className="title heading">
              Signin to your <br /> PopX account
            </h1>
            <p className="paragraph">
              Lorem, ipsum dolor sit modi quos dolorem vitae mollitia iusto{" "}
            </p>
            <br />
            <CustomInput
              type="email"
              placeholder="Enter email address"
              value={login.email}
              handleInput={handleInput}
              name={"email"}
            />
            <CustomInput
              type="password"
              placeholder="Enter password"
              value={login.password}
              handleInput={handleInput}
              name={"password"}
            />
          </div>
          <div>
            <div
              className="button"
              style={{ background: "#cbcbcb" }}
              onClick={handleLogin}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
