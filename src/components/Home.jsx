import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();
  const currentUserToken = localStorage.getItem("userToken");

// useEffect hook to check if user is logged in and redirect to Keeper page
  useEffect(() => {
    if (currentUserToken != null) {
      navigate("/keeper");  // Redirect to Keeper page if user is logged in
    }
  });

  return (
    <section className="backgroundContainer columnAlignment alignCenter">
      <div className="columnAlignment alignCenter cardContainer">
        <h1 className="heading">
          <span className="headingBlack">Welcome to&nbsp;</span>
          NoteNest
        </h1>
        <p className="tagline">keep your notes safe!</p>
        <div className="rowAlignment">
          <Link to="/login">
            <button className="accentButton darkAccentButton">Login</button>
          </Link>
          <Link to="/register">
            <button className="accentButton transparentAccentButton">Register</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
