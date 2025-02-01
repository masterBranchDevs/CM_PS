import React, { useState, useEffect } from "react";
import c1 from "../assects/Img1.webp";
import c2 from "../assects/Img2.webp";
import c3 from "../assects/Img3.webp";
import c4 from "../assects/Img4.webp";
import c5 from "../assects/Img5.webp";
import loader from "../assects/cm.png"; // Import loader image
import "../index.css";
import "./app.css";
import NavBar from "./navbar/navBar";
import Home from "./home/home";
import SplitLayout from "./cv/splitLayout";
import SlidingCards from "./ourCompany/ourCompany";
import Testimonials from "./testimonials/testimonials";
import Footer from "./footer/footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const images = [c1, c2, c3, c4, c5];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loader} alt="Loading..." className="loader rounded-full" />
        </div>
      ) : (
        <>
          <NavBar />
          <section style={{ paddingRight: "2%", paddingLeft: "2%" }}>
            <Home images={images} />
            <SplitLayout />
            <SlidingCards />
            <Testimonials />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
