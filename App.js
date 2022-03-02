import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyPortfolio from "./Portfolio/MyPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
