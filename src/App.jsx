import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Lottie from "react-lottie";
import animationData from "./animation/animation.json";
import GoToTopButton from "./Components/ui/GoToTopButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Services from "./Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Blogs from "./Blogs";
import AllBlogs from "./AllBlogs";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Products from "./Products";

function App() {
  const [animate, setAnimate] = useState(true);
  const [showGoToTop, setShowGoToTop] = useState(false); 
  // Initialize AOS (Animation on Scroll)
  useEffect(() => {
    Aos.init({ easing: 'ease-in-out' });

    // Set a timer of 3 seconds to stop animation
    const timer = setTimeout(() => {
      setAnimate(false); // After 3 seconds, set animate to false
    }, 3000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lottie options for animation
  const lottieOptions = {
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
    animationData: animationData, // Lottie animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Control the aspect ratio
    },
  };

  return (
    <div className="bg-white">
      {/* Conditionally render the Lottie animation */}
      {animate ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
          <Lottie options={lottieOptions} height={100} width={100} />
        </div>
      ) : (
        <Router>
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/blog/:blog" element={<Blogs/>} />
            <Route path="/blogs" element={<AllBlogs/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
          {showGoToTop && <GoToTopButton />}
          <Footer/>
        </Router>
      )}
    </div>
  );
}

export default App;
