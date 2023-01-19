import "./App.css";
import Axios from "axios";
import React, { useState } from "react";
import Header from "./Components/Header";
import LocalData from "./Components/LocalData";
import GlobalData from "./Components/GlobalData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  // Api Documentation Link: www.hpb.health.gov.lk/en/api-documentation
  https: return (
    <Router>
      <div className="App min-h-screen">
        <Header />
        <Routes>
          <Route exact path="/" element={<GlobalData />} />
          <Route exact path="/local" element={<LocalData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
