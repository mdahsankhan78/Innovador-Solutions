import React from 'react'
import PreFooter from "./Components/PreFooter";
import ContactUs from "./Components/ContactUs";
import { ServicesCards1 } from "./Components/ui/Main/Card";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Projects from "./Components/Projects";
import Mission from "./Components/Mission";
import Main from "./Components/Main";
import Industries from "./Components/Industries";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blogs from './Components/Blogs';

const Index = () => {
  return (
    <div>
      <title>Your Partner in Digital Products & Marketing Solutions | Innovador Solutions</title>

      {/* Once animation is complete, render the content */}

      <div className="relative md:-top-24 inset-0 z-0 h-screen">
        <Main />
      </div>
        <ServicesCards1 />
      <About />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      {/* <Mission /> */}
      <Industries />
      <Mission />
      <ContactUs />
      <Blogs />
      <PreFooter />
    </div>
  )
}

export default Index
