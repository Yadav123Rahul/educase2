import React from "react";
import Home from "./componets/Home";
import Login from "./componets/Login";
import CreateAcount from "./componets/CreateAcount";
import AccountSetting from "./AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./componets/ContexApi";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAcount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={<AccountSetting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
