import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../component/app.css"

import { useNavigate } from "react-router-dom";
export default function Login() {
  const [values, setValues] = useState({});
  const [fetchdata, setFetchdata] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validemail, setValidemail] = useState(false);

  const navigate = useNavigate();
  const handlechage = function (event) {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((data) => {
      setFetchdata(data?.data);
    });
  }, []);

  const submit = function (e) {
    e.preventDefault();

    let dataMatch = fetchdata?.some((item) => item.email === email);
    if (dataMatch) {
      navigate("/navbar");
      console.log("login sucess");
    } else {
      setValidemail("This email is not valid.");
      console.log("login failed");
    }
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/backlogin">
          <span
            style={{ fontSize: "25px", color: "black",position:"absolute",left:"15px" }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <div>
          <form
            onSubmit={submit}
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              padding: "20px",

              width: "500px",
              height: "600px",
              backgroundColor: "rgb(225, 225, 225)",
            }}
          >
            <p
              style={{ textAlign: "center", fontSize: "30px", color: "black" }}
            >
              <strong>Please login your account</strong>
            </p>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="type your Email"
                onChange={handlechage}
                style={{
                  width: "400px",
                  height: "60px",
                  marginTop: "0px",
                  fontSize: "20px",
                  padding: "10px",
                  border: "none",
                  outline: "none",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="type your password"
                onChange={handlechage}
                style={{
                  width: "400px",
                  height: "60px",
                  marginTop: "0px",
                  fontSize: "20px",
                  padding: "10px",
                  border: "none",
                  outline: "none",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
            <p style={{ textAlign: "center", color: "red",fontSize:"20px" }}>{validemail}</p>
            <button
            className="login-btn"
              type="submit"
              style={{
                width: "200px",
                height: "60px",
                color:"white",
                display: "block",
                margin: "0px auto auto auto",
                backgroundColor: "#f57224",
                fontSize: "20px",
                borderRadius: "10px",
                border:"none",
                outline:"none"
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
