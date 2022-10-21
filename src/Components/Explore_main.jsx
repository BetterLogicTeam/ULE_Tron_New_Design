import React from "react";
import Explore from "./Explore/Explore";
import { Link } from "react-router-dom";
import { Header } from "../Routes";
import Footer from "./Footer/Footer";

function Explore_main() {
  return (
    <div className="bg_color">
      <Header/>
      

   
      <Explore />
      <Footer />

      
    </div>
  );
}

export default Explore_main;
