import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import HomePage from "./assets/pages/HomePage";
import GamePage from "./assets/pages/GamePage";
//layouts
import HomeLayout from "./assets/layouts/HomeLayout";
import DefaultLayout from "./assets/layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomeLayout}>
          <Route index Component={HomePage} />
        </Route>
        <Route Component={DefaultLayout}>
          <Route path="/game" Component={GamePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
