import React from "react";
import Home from "./Home";
import DetailedRow from "../src/components/DetailedRow";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:pageNumber" element={<Home />} />
        <Route path="/row/:id" element={<DetailedRow />} />
      </Routes>
    </BrowserRouter>
  );
}
