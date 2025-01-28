import c1 from "../assects/Img1.jpg";
import c2 from "../assects/Img2.jpg";
import c3 from "../assects/Img3.jpg";
import c4 from "../assects/Img4.jpg";
import c5 from "../assects/Img5.jpg";

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import '../index.css';
import NavBar from './navbar/navBar'
import Home from './home/home'
import EmailForm from './clients/clientForm';
import SplitLayout from './cv/splitLayout';
import SlidingCards from './ourCompany/ourCompany';
import Testimonials from './testimonials/testimonials'
import Footer from './footer/footer';


const App = () => {
  const images = [c1, c2, c3, c4, c5];
  // const [data, setData] = useState('');

  

  return (
    <>
      <NavBar />
      <section style={{
        paddingRight: "2%",
        paddingLeft: "2%",
      }}>
      <Home images={images}/>
      <SplitLayout />
      <section style={{
        paddingTop: "3rem",
      }}>
      <SlidingCards />
      <Testimonials />
      </section>
      {/* <EmailForm />  */}
      </section>
      <Footer />
    </>
  );
};

export default App;
