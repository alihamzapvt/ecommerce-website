import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./app.css";
export default function Productfetch() {
  const [state, setState] = useState([]);
  let [loading, setLoading] = useState("spinner-border");

  function api() {
    setLoading("spinner-border");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((value) => {
        setState(value);
        setLoading(true);
      });
  }
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-center  "
        style={{position: "absolute",right:"50%",top:"102%" }}
      >
        <div
          className={loading}
          style={{
            width: "3rem",
            height: "3rem",
            textAlign: "center",
            role: "status",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <div className="contaner">
        {state.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </>
  );
}
