import React, { useEffect, useState } from "react";
import "./app.css";

import * as Pages from "./Components/Compositions/Pages/index";

import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/GloriaArmada" element={<Pages.GloriaArmada />} />
        <Route path="/Interactives" element={<Pages.Interactives />} />
        <Route path="/GameEngine" element={<Pages.GameEngine />} />
        <Route path="/CaveGen" element={<Pages.CaveGen />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
