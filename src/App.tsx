import React from 'react';
import MainPage from "./components/MainPage"
import { Routes, Route } from 'react-router-dom';
import HistoryTable from "./components/HistoryTable"
import Login from "./components/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* will be protected */}
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/historyTable" element={<HistoryTable />} />
    </Routes>
  );
}

export default App;


