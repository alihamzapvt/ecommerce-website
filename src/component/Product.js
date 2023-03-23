import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart, selectproduct } from "../reduxcomponent/action";
import { addtocartfrnt } from "../reduxcomponent/action";
import "./app.css";
export default function Product({ item }) {
  const dispatch = useDispatch();

  function handlecart() {
    dispatch(addtocart(item));
  }
  console.log(item);
  function productfetch() {
    dispatch(addtocartfrnt(item));
  }
  return (
    <Link to={"/productselect"} style={{ textDecoration: "none" }}>
      <div
        onClick={() => productfetch(item)}
        style={{
          width: "250px",
          height: "340px",
          backgroundColor: "#E1E1E1",
          borderRadius: "20px",
          display: "grid",
          justifyContent: "center",
          textDecorationLine: "none",
        }}
        className="display-product"
      >
        <div
          style={{
            display: "block",
            margin: "auto",
            width: "200px",
          }}
        >
          <img
            src={item.image}
            style={{
              width: "200px",
              height: "200px",
              marginTop: "20px",
            }}
          />
        </div>
        <div
          style={{
            widows: "200px",
            height: "100px",
            backgroundColor: "white",
          }}
        >
          <p
            className="card-text"
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            {item.title.slice(0, 22)}
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "red",
              textAlign: "center",
            }}
          >
            Rs.{item.price} $
          </p>
        </div>
      </div>
    </Link>
    ////////////////////////////////////
    /* // <div className="card" style={{ width: "12rem" }}>
    //   <Link to={"/productselect"}>
    //     <img */
    //       src={item.image}
    //       onClick={() => productfetch(item)}
    //       className="card-img-top"
    //       alt="..."
    //     />
    //
    //   <div className="card-body">
    //     <p className="card-text">{item.description.slice(0, 81)}...</p>
    //     <button style={{borderRadius:"10px",backgroundColor:"gray"}} onClick={() => handlecart(item)}>Add TO CART</button>
    //   </div>
    // </div>
  );
}
