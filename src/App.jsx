import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import LandingPage from "./components/LandingPage";
import ProjectsPage from "./components/ProjectsPage"; // Import your Projects component


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
