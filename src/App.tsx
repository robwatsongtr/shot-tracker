import MainPage from "./components/MainPage"
import { Routes, Route } from 'react-router-dom';
import HistoryTable from "./components/HistoryTable"
import LoginPage from "./components/LoginPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/historyTable" element={<HistoryTable />} />
    </Routes>
  );
}

export default App;


