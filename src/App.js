
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Windows from './pages/Windows';
import Mac from './pages/Mac';
import "./i18n";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Windows />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
    </Router>
  );
}

export default App;
