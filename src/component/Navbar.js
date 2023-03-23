import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Productfetch from "./Productfetch";
import "./app.css";
import mart from "./mart.jpg";
import fashion from "./fashion.jpg";
import decor from "./decor.jpg";
import makup from "./makup.jpg";
import BootstrapCarousel from "./BootstrapCarousel";


export default function Navbar() {
  const add = useSelector((state) => state.productselect.selectproduct);
  const [input, setinput] = useState("2px solid black");
  const [navbarinput, setNavbarinput] = useState("");
 


  const btninput = function () {
    setinput("2px solid red");
    document.body.backGroundColor = "gray";
  };
  const inputborderremove = function () {
    setinput("2px solid black");
  };
  const inputcolorremv = function () {
    setinput("2px solid black");
  };
  const removeinputcolor = function () {
    setinput("2px solid black");
    // console.log("input", "////////////////");
  };

  const handlechang = (e) => {
    let handlevalue = e.target.value;
    setNavbarinput(handlevalue)
  }
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
          <input type="text" value={navbarinput} onChange={(e) =>setNavbarinput(e.target.value)}/>
          <Link to={`/${navbarinput}`} style={{textDecoration:"none"}}>
          <span style={{ color: "white" }}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span></Link>
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

      <BootstrapCarousel onClick={removeinputcolor} />

      <div
        className="fashion-of"
        style={{
          border: "2px soid black",
          height: "10vh",
          backgroundColor: "#F5F5F5",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            width: "280px",
            backgroundColor: "white",
            borderRadius: "30px",
            height: "40px",
          }}
        >
          <img
            src={mart}
            style={{ height: "40px", width: "40px", borderRadius: "50px" }}
          />{" "}
          Mart
        </div>

        <div
          style={{
            width: "280px",
            backgroundColor: "white",
            borderRadius: "30px",
            height: "40px",
          }}
        >
          <img
            src={fashion}
            style={{ height: "40px", width: "40px", borderRadius: "50px" }}
          />{" "}
          Fashion
        </div>

        <div
          style={{
            width: "280px",
            backgroundColor: "white",
            borderRadius: "30px",
            height: "40px",
          }}
        >
          <img
            src={makup}
            style={{ height: "40px", width: "40px", borderRadius: "50px" }}
          />{" "}
          Beauty
        </div>

        <div
          style={{
            width: "280px",
            backgroundColor: "white",
            borderRadius: "30px",
            height: "40px",
          }}
        >
          <img
            src={decor}
            style={{ height: "40px", width: "40px", borderRadius: "50px" }}
          />{" "}
          Home&Decor
        </div>
      </div>

      <div
        style={{
          height: "8vh",
          backgroundColor: "#F5F5F5",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "25px",
          color: "#454545",
        }}
      >
        <div style={{ height: "40px", width: "280px" }}>Flash Sale</div>
        <div style={{ height: "40px", width: "280px" }}></div>
        <div style={{ height: "40px", width: "280px" }}> </div>
        <div style={{ height: "40px", width: "280px" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "space-around",
          height: "50px",
        }}
      >
        <div
          style={{
            width: "400px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "18px", color: " #ff8936" }}>On Sale Now</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "8px",
            }}
          >
            <div style={{ fontSize: "18px" }}>Ending In</div>
            <div
              style={{
                height: "35px",
                width: "45px",
                backgroundColor: "#ff8936",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              12
            </div>
            <div
              style={{
                height: "35px",
                width: "45px",
                backgroundColor: "#ff8936",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              30
            </div>
            <div
              style={{
                height: "35px",
                width: "45px",
                backgroundColor: "#ff8936",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              47
            </div>
          </div>
        </div>
        <div
          style={{
            height: "20px",
            width: "400px",
            display: "flex",
            justifyContent: "end",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ff8936",
              height: "40px",
              width: "140px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ff8936",
            }}
          >
            SHOP MORE
          </div>
        </div>
      </div>
      {/* <Shop/> */}
      <Productfetch />
    </>
  );
}
