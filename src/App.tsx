import React from 'react';
import MainPage from "./components/MainPage"
import { Routes, Route } from 'react-router-dom';
import History from "./components/History"
import History2 from "./components/History2"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<History />} />
      <Route path="/history2" element={<History2 />} />
    </Routes>
  );
}

export default App;


