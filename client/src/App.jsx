import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import DashboardPage from "./pages/DashboardPage";
import TopNavigationBar from "./components/TopNavigationBar";
import HealthRecordPage from "./pages/HealthRecordPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/health-record" element={<HealthRecordPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;

