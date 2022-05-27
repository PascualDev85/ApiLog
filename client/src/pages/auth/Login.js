import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

import "./login.scss";

export const Login = () => {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const [result, setResult] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/uploadFiles");
  };

  const handleSubmitApi = (e) => {
    e.preventDefault();
    const { name, password } = login;

    const hashedPassword = bcrypt.hashSync(password);
    console.log(hashedPassword);
    let finalObject = {
      name: name,
      password: hashedPassword,
    };

    axios
      .post("http://localhost:4000/users/userlogin", finalObject)
      .then((res) => {
        setResult({ message: res.statusText, password: res.data });
        console.log(res);
      })

      .catch((err) => {
        setResult(null);
        console.log(err);
      });
  };

  return (
    <div className="boxLogin">
      <h1>Bienvenido/a</h1>
      <div className="boxInput">
        <input
          className="inpLogin"
          placeholder="Ingrese su nombre"
          type="text"
          autoComplete="off"
          name="name"
          value={login.name}
          onChange={handleChange}
        />
        <input
          className="inpLogin"
          placeholder="Contraseña"
          type="password"
          autoComplete="off"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
        <button type="submit" onClick={handleSubmitApi}>
          ENVIO API
        </button>
        {result ? (
          <>
            <p>{result.message}</p>
            <p>{result.password}</p>
          </>
        ) : (
          <p>NO</p>
        )}
      </div>
    </div>
  );
};
