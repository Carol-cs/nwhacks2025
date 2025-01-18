import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import HealthRecordPage from "./pages/HealthRecordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/health-record" element={<HealthRecordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
