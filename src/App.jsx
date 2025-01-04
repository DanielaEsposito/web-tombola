import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//pages
import HomePage from "./assets/pages/HomePage";
import GamePage from "./assets/pages/GamePage";
//layouts
import HomeLayout from "./assets/layouts/HomeLayout";
import GameLayout from "./assets/layouts/GameLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomeLayout}>
          <Route index Component={HomePage} />
        </Route>
        <Route Component={GameLayout}>
          <Route path="/game" Component={GamePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
