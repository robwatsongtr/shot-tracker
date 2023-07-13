import React from 'react';
import MainPage from "./components/MainPage"
import { Routes, Route } from 'react-router-dom';
import History from "./components/History"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;


