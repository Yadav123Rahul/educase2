import React, { useEffect } from "react";
import img from "../src/assets/photo.png";
import useUser from "./componets/ContexApi";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
const AccountSetting = () => {
  const [userContext, setUserContext] = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userContext.name) {
      navigate("/create-account");
    }
  }, [userContext]);
  return (
    <div className="container">
      <div className="form-card">
        <h3 className="account">Acount settings</h3>
        <div className="card" style={{ justifyContent: "flex-start" }}>
          <div className="user-div">
            <img src={img} alt="user" className="user-img" />
            <span className="camera">
              <FaCamera />
            </span>
            <div>
              <h5 className="user-name">{userContext.name}</h5>
              <p className="user-email"> {userContext.email}</p>
            </div>
          </div>
          <p className="user-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            corporis dolorum mollitia, suscipit, porro dolore tempore!
          </p>
          <br />
          <div className="dotted"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
