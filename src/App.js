import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import Error404 from "./Pages/Error404";


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