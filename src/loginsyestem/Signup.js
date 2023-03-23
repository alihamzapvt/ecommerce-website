import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [values, setValues] = useState({});

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const [getdata, setGetdata] = useState([]);

  const [emailtaken, setEmailtaken] = useState(false);

  const navigate = useNavigate();

  const handlechage = function (event) {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        setNameValid(value.length > 0);
        break;
      case "email":
        setEmail(value);
        setEmailValid(value.includes("@gmail.com"));
        break;
      case "password":
        setPassword(value);
        setPasswordValid(value.length >= 6);
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((value) => {
      setGetdata(value.data);
    });
  }, []);

  const submit = function (event) {
    event.preventDefault();
    if (nameValid && emailValid && passwordValid) {
      let emailMatch = getdata.some((item) => item.email === email);
      if (!emailMatch) {
        let url = "http://localhost:3000/posts";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .catch((error) => {
            console.error("Error:", error);
          });
        setEmailtaken("successfully login");
        navigate("/navbar");
        console.log("postdat///////////");
      } else {
        setEmailtaken("This email is already taken");
      }
    } else {
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
        <Link to="/backsignin">
          <span
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              color: "black",
              position: "absolute",
              left: "15px",
            }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>

        <form
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
          <p style={{ textAlign: "center", fontSize: "30px", color: "black" }}>
            <strong>Please login your account</strong>
          </p>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handlechage}
              style={{
                width: "400px",
                height: "60px",
                marginTop: "10px",
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
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handlechage}
              style={{
                width: "400px",
                height: "60px",
                marginTop: "10px",
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
              placeholder="password"
              onChange={handlechage}
              style={{
                width: "400px",
                height: "60px",
                marginTop: "10px",
                fontSize: "20px",
                padding: "10px",
                border: "none",
                outline: "none",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <p style={{ color: "red", textAlign: "center" }}>{emailtaken}</p>
          <button
            type="submit"
            onClick={submit}
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
            submit
          </button>
          <div style={{ fontSize: "20px" }}>
            {!nameValid ? (
              <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-solid fa-check" style={{ color: "green" }}></i>
            )}
            <strong style={{ fontSize: "20px", marginLeft: "5px" }}>
              Please enter your name.
            </strong>
          </div>
          <div style={{ fontSize: "20px" }}>
            {!emailValid ? (
              <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-solid fa-check" style={{ color: "green" }}></i>
            )}
            <strong style={{ fontSize: "20px", marginLeft: "5px" }}>
              Please enter a valid email address.
            </strong>
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            {!passwordValid ? (
              <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-solid fa-check" style={{ color: "green" }}></i>
            )}
            <strong style={{ fontSize: "20px", marginLeft: "5px" }}>
              {" "}
              Password must be at least 6 characters long.
            </strong>
          </div>
        </form>
      </div>
    </>
  );
}
