import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CustomInput from "../CustomInput";
import useUser from "./ContexApi";
import { useNavigate } from "react-router-dom";

const CreateAcount = () => {
  const [userContext, setUserContext] = useUser();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleForm() {
    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.agency ||
      !user.number ||
      !user.company
    ) {
      navigate("/create-account");
    } else {
      setUserContext({...user,
        name: user.name,
        email: user.email,
        password: user.password,
        agency: user.agency,
        number: user.number,
        company: user.company,
      });
      navigate("/account-settings");
    }
  }

  return (
    <div className="container">
      <div className="form-card">
        <div className="card" style={{ justifyContent: "space-between" }}>
          <div>
            <h1 className="title heading">
              Create Your <br /> PopX account
            </h1>
            <CustomInput
              type="text"
              placeholder="Full Name"
              value={user.name}
              handleInput={handleInput}
              name={"name"}
            />
            <CustomInput
              type="text"
              placeholder="Phone Number"
              value={user.number}
              name={"number"}
              handleInput={handleInput}
            />
            <CustomInput
              type="email"
              placeholder="Email Address"
              name={"email"}
              value={user.email}
              handleInput={handleInput}
            />
            <CustomInput
              type="password"
              placeholder="Password"
              name={"password"}
              value={user.password}
              handleInput={handleInput}
            />
            <CustomInput
              type="text"
              placeholder="Company Name"
              name={"company"}
              required={false}
              value={user.company}
              handleInput={handleInput}
            />

            <div style={{ marginLeft: "5px" }}>
              <p className="agency">
                Are you an Agency?<span style={{ color: "red" }}>*</span>
              </p>

              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => setUser({ ...user, agency: e.target.value })}
                >
                  <FormControlLabel
                    value="yes"
                    label="Yes"
                    control={
                      <Radio
                        sx={{
                          color: "",
                          "&.Mui-checked": {
                            color: "#6a25f3",
                            opacity: 0.9,
                          },
                        }}
                      />
                    }
                  />
                  <FormControlLabel
                    value="no"
                    label="No"
                    control={
                      <Radio
                        sx={{
                          color: "",
                          "&.Mui-checked": {
                            color: "#6a25f3",
                            opacity: 0.9,
                          },
                        }}
                      />
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div>
            <div className="button" onClick={handleForm}>
              Create Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcount;
