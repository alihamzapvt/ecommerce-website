import "./App.css";
import Navbar from "./component/Navbar";
import Productfetch from "./component/Productfetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productselect from "./component/Productselect";
import Add_TO_Cart from "./component/Add_TO_Cart";
import Shop from "./component/Shop";
import Frontpage from "./loginsyestem/Frontpage";
import Signup from "./loginsyestem/Signup";
import Login from "./loginsyestem/Login";
import Productpaginate from "./component/Productpaginate";
// import "../component/app.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/navbar" element={<Navbar />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/backlogin" element={<Frontpage />} />
          <Route path="/backsignin" element={<Frontpage />} />

          <Route path="/productselect" element={<Productselect />} />
          <Route path="/addtocart" element={<Add_TO_Cart />} />

          <Route
            exact
            path="/jewelery"
            element={<Productpaginate category="jewelery" key="jewelery" />}
          />
          <Route
            exact
            path="/electronics"
            element={
              <Productpaginate category="electronics" key="electronics" />
            }
          />
          <Route
            exact
            path="/men's clothing"
            element={
              <Productpaginate category="men's clothing" key="men's clothing" />
            }
          />
          <Route
            exact
            path="/women's clothing"
            element={
              <Productpaginate
                category="women's clothing"
                key="women's clothing"
              />
            }
          />
          <Route path="" element={<div>page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
