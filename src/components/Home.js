import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

const Home = () => {
  return (
    <div>
      <div className="top_banner">
        <h2>slogan</h2>
        <Link to="/form">
          <button className="yeni_buton" type="button">
            Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
