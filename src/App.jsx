import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Basket from "./components/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/addPage" element={<AddPage />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
