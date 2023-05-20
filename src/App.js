import React from "react";
import { Button } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FoodDescription from "./Pages/FoodDescription";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/food/:id" Component={FoodDescription} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
