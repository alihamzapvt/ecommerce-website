import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Shop() {
  const add = useSelector((state) => state.productselect.selectproduct

  )

  console.log(add);
  return (
    <>
      <Link to={"/addtocart"}>
        <i
          className="fa-solid fa-cart-shopping"
          style={{
            color: "white",
            fontSize: "30px",
            position: "absolute",
            right: "20px",
            top: "21px",
          }}
        ></i>
        <p
          style={{
            position: "absolute",
            top: "0px",
            right: "29px",
            color: "white",
          }}
        >
        <strong>{add.length}</strong> 
        </p>
      </Link>
    </>
  );
}
