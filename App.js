import React from "react";
import Navbar from "./component/navbar";
import Button from "./component/Button";
import Image from "./component/Image";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Skill from "./component/Skill";


const App = () => {
  return (
  <div className="bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center h-screen">
    <Navbar />
    <Button />
    <Image />
    <Project />
    <Skill />
    <Contact />
    <About />
    <Footer />

  </div>
  )
};

export default App;
