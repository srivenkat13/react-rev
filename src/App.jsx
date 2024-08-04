import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Practice } from "./components/Practice";
import { Nav } from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
};

export { App };
