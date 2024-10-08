import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Kanbas from "./Kanbas"
import Labs from "./Labs"
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
