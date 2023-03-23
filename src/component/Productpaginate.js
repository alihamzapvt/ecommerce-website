import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./app.css";
export default function Productpaginate(props) {
  const add = useSelector((state) => state.productselect.selectproduct);
  const [fetchdata, setFetchdata] = useState([]);
  const [input, setinput] = useState("2px solid black");
  const [navbarinput, setNavbarinput] = useState("");
  let [loading, setLoading] = useState("spinner-border");

 
  const handlechang = (e) => {
    let handlevalue = e.target.value;
    setNavbarinput(handlevalue)
  }
  const btninput = function () {
    setinput("2px solid red");
    document.body.backGroundColor = "gray";
  };
  const inputcolorremv = function () {
    setinput("2px solid black");
  };
  let url = `https://fakestoreapi.com/products/category/${props.category}`;

  function api() {
    setLoading("spinner-border");
    fetch(url)
      .then((res) => res.json())
      .then((value) => {
        setFetchdata(value);
      });
      setLoading(true);
  }
  useEffect(() => {
    api();
  }, []);
  console.log(fetchdata);

  return (
    <>
      <nav>
        <div>
          <i
            style={{
              color: "#ff8936",
              fontSize: "40px",
              textAlign: "center",
              width: "100px",
            }}
            class="fa-brands fa-amazon"
          ></i>
          <div style={{ fontSize: "25px", color: "white", fontWeight: "bold" }}>
            Amazone
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "7px" }}
          className="location-country"
        >
          <i style={{ color: "white" }} class="fa-solid fa-location-dot"></i>
          <div>
            <p style={{ color: "white", fontSize: "14px", color: " #D3D3D3" }}>
              <div> Enviar a</div>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                {" "}
                Pakistan
              </span>
            </p>
          </div>
        </div>
        <div
          className="input_container"
          id="input-containerid"
          onClick={btninput}
          style={{ border: input }}
        >
          <select onChange={handlechang}>
            <option value="">todos</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
          <input type="text" value={navbarinput} onChange={(e) => setNavbarinput(e.target.value)}/>
          <Link to={`/${navbarinput}`} style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </Link>
        </div>

        <div className="identification">
          <div style={{ color: "white", fontSize: "14px", color: " #D3D3D3" }}>
            Hola,Identificate
          </div>
          <div style={{ display: "flex", color: "white", gap: "4px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Cunta y Listas
            </span>
            <span>
              <i
                class="fa-solid fa-angle-down"
                style={{ fontSize: "15px", color: "white" }}
              ></i>
            </span>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#ff8936",
              textDecoration: "none",
              outline: "none",
              marginLeft: "15px",
              fontWeight: "bold",
            }}
          >
            {add.length}
          </div>
          <Link to={"/addtocart"}>
            <div>
              <i
                className="fa-solid fa-cart-shopping"
                style={{
                  color: "white",
                  fontSize: "35px",
                }}
              ></i>
            </div>
          </Link>
        </div>
      </nav>
      <div className="main_div" onClick={inputcolorremv}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="ul-list-item"
        >
          <div>Home</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>our services</div>
          <div>Gallery</div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center  "
        style={{position: "absolute",right:"50%",top:"50%" }}
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


      <div
        style={{
          display: "grid",
          gridTemplateColumns: " auto auto auto auto",
          gap: "10px",

          padding: "10px",
        }}
      >
        {fetchdata.map((item) => {
          return (
            <div style={{ height: "300px", width: "200px" }}>
              <img
                src={item.image}
                style={{ height: "300px", width: "200px" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
