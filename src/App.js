import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/ListUser";
import DetailUser from "./components/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
