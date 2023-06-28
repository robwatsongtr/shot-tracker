import React from 'react';
import { Routes, Route } from "react-router-dom" 
import MainPage from "./components/MainPage"
import ResultPage from './components/ResultPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;


