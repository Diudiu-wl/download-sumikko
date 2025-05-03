
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Squid from './pages/Squid';
import Octo from './pages/Octo';
import "./i18n";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Squid />} />
        <Route path="/octo" element={<Octo />} />
      </Routes>
    </Router>
  );
}

export default App;
