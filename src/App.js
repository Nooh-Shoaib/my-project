import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error404 from "./Pages/Error404";
import LandingPage from "./Pages/LandingPage";


function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;