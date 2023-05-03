import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import LandingPage from "./components/LandingPage";
import ProjectsPage from "./components/ProjectsPage"; // Import your Projects component
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skillslist" element={<SkillsSection />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
