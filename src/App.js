import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JobDetailsPage from "./pages/JobDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/job/:id" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
