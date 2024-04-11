import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="form-card">
        <div className="card">
          <div>
            <h1 className="title">Welcom to PopX</h1>
            <p className="paragraph">
              Lorem, ipsum dolor sit modi quos dolorem vitae mollitia iusto{" "}
            </p>
            <br />
            <div className="button" onClick={()=>navigate("/create-account")}>Create Acount</div>
            <div className="button allready">
              Allready Rigisterd?<span className="login" onClick={()=>navigate("/login")}> Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
