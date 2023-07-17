import React from 'react';
import MainPage from "./components/MainPage"
import { Routes, Route } from 'react-router-dom';
import HistoryText from "./components/HistoryText"
import HistoryTable from "./components/HistoryTable"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/historyText" element={<HistoryText />} />
      <Route path="/historyTable" element={<HistoryTable />} />
    </Routes>
  );
}

export default App;


