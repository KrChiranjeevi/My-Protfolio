import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetail";
import FloatingParticles from "./components/ShootingStars"; // Added GSAP animation component
import "./index.css";
import NotFoundPage from "./Pages/404";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Home from "./Pages/Home";
import Portofolio from "./Pages/Portofolio";
import WelcomeScreen from "./Pages/WelcomeScreen";
import PropTypes from "prop-types";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <FloatingParticles />
      <Home />
      <About />
      <Portofolio />
      <ContactPage />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              KR™
            </a>
            . All Rights Reserved.
          </span>
        </center>
      </footer>
    </>
  );
};

LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired,
};


const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            KR™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  console.log("TRACE: App function execution");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;