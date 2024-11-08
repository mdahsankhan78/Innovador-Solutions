import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import 'aos/dist/aos.css';
import Aos from "aos";
import { Card } from "./Components/ui/Main/Card";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Projects from "./Components/Projects";
import Mission from "./Components/Mission";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";
import PreFooter from "./Components/PreFooter";
import ContactUs from "./Components/ContactUs";
import Lottie from "react-lottie";
import animationData from "./animation/animation.json"; // Make sure the path is correct!

function App() {
  const [animate, setAnimate] = useState(true);

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
    <>
      {/* Conditionally render the Lottie animation */}
      {animate ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
          <Lottie options={lottieOptions} height={100} width={100} />
        </div>
      ) : (
        <div>
          {/* Once animation is complete, render the content */}
          <Header />
          <div className="inset-0 z-0 bg-cover bg-center h-screen">
            <Main />
          </div>
          <Card />
          <About />
          <Services />
          {/* <Testimonials /> */}
          <Projects />
          {/* <Mission /> */}
          <Industries />
          <ContactUs />
          <PreFooter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
