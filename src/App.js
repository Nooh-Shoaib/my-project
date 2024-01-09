import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error404 from "./Pages/Error404";
import LandingPage from "./Pages/LandingPage";
import CalendlyInlineWidget from './Pages/Calender';
import OurServices from './Pages/OurServices';



function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/schedule-a-meeting" element={<CalendlyInlineWidget />} />
        <Route exact path="/:slug" element={<OurServices />} />
        <Route exact path="/Page Not Found" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

