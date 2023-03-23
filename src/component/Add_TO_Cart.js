import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removefromcart } from "../reduxcomponent/action";
import "./app.css";
export default function Add_TO_Cart() {
  const [input, setinput] = useState("2px solid black");
  const additem = useSelector((state) => state.productselect.selectproduct);
  const add = useSelector((state) => state.productselect.selectproduct);

  const dispatch = useDispatch();

  function removefromcar(item) {
    dispatch(removefromcart(item));
  }
  const btninput = function () {
    setinput("2px solid red");
    document.body.backGroundColor = "gray";
  };
  console.log(additem);
  return (
    <>
      <nav>
        <Link to="/navbar">
          <span
            style={{ fontSize: "25px", marginLeft: "10px", color: "white" }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
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
          <select>
            <option value="some">todos</option>
            <option value="some">elec</option>
            <option value="some">jewlery</option>
            <option value="some">jeans</option>
            <option value="some">some</option>
          </select>
          <input type="text" />
          <span style={{ color: "white" }}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
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
      {additem.map((item) => {
        return (
          <>
            <div
              style={{
                height: "82vh",
                width: "100%",

                display: "flex",
                justifyContent: "space-evenly",
                backgroundColor: "#E1E1E1",
              }}
            >
              <div style={{ height: "60vh", width: "50vh" }}>
                <img
                  src={item.image}
                  style={{
                    height: "60vh",
                    width: "50vh",
                    backgroundColor: "#E1E1E1",
                  }}
                />
              </div>
              <div style={{ height: "60vh", width: "70vh" }}>
                <div>
                  {" "}
                  <h5
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    {item.title}
                  </h5>
                </div>
                <br />
                <div>
                  <strong>{item.category}</strong>{" "}
                  <span style={{ color: "gray" }}>|</span>
                  <span style={{ fontSize: "20px", color: "red" }}>
                    Rating:{item.rating.rate}
                  </span>
                  <span>({item.rating.count})</span>
                </div>
                <br />

                <div style={{ fontSize: "30px", color: "red" }}>
                  Rs.{item.price} $
                </div>
                <br />
                <div>{item.description.slice(0, 200)}...</div>
                <br />
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    fontSize: "20px",
                  }}
                >
                  <button
                    style={{
                      width: "40vh",
                      height: "50px",
                      color: "white",
                      backgroundColor: "#f57224",
                      border: "none",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    id="remove-cart"
                    onClick={() => removefromcar(item)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
              <div style={{ height: "60vh", width: "50vh" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "20px",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>Delivery</p>
                  <div>
                    <i class="fa-solid fa-circle-exclamation"></i>
                  </div>
                </div>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "20px", marginRight: "4px" }}>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>Sindh, Karachi-Gulshan-e-Iqbal,Block 15</div>
                  <div style={{ color: "blue" }}>CHANCE</div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div
                    style={{
                      marginRight: "4px",
                      borderRadius: "50px",
                      color: "red",
                      border: "2px solid black",
                      width: "22px",
                      textAlign: "center",
                      height: "24px",
                    }}
                  >
                    F
                  </div>
                  <div>Fullfill by Daraz</div>
                </div>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <i
                      style={{ marginRight: "4px" }}
                      class="fa-solid fa-truck"
                    ></i>
                    Stand Delivery
                    <div
                      style={{
                        textAlign: "center",
                        color: " gray",
                        fontSize: "15px",
                      }}
                    >
                      2-3days(s)
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold" }}>Rs.99</div>
                </div>
                <br />
                <div>
                  Enjoy free shipping promotion with minimum spend of Rs.800
                  from my Product
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    Expresss Delivery{" "}
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        color: " gray",
                      }}
                    >
                      Tomorrow
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold" }}>Rs.98</div>
                </div>
                <br />
                <div>
                  Enjoy free shipping promotion with minimum spend of Rs.800
                  from Product.
                </div>
              </div>
            </div>
            <div
              style={{ height: "1px", width: "100%", backgroundColor: "black" }}
            ></div>
          </>
        );
      })}

      {/* ///////////////////////////// */}
      {/* <Link to="/navbar">
        <span style={{ fontSize: "25px", marginLeft: "10px", color: "black" }}>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <div className="contaners">
      {item.map((item) => {
        return (
         
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.category}</h5>
                <p className="card-text">{item.title}</p>
                <p className="card-text">Price:{item.price} $</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => removefromcar(item)}
                >
                  Remomve
                </a>
              </div>
            </div>
         
        );
      })}
       </div> */}
    </>
  );
}
