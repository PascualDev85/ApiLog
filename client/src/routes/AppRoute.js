import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/auth/Login";
import { UploadFiles } from "../components/UploadFiles";

export const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/uploadFiles" element={<UploadFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
