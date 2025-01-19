import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import TopNavigationBar from "./components/TopNavigationBar";
import HealthRecordPage from "./pages/HealthRecordPage";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/auth/AuthPage";
import AuthRedirect from "./components/routes/AuthRedirect";
import CommonLayout from "./components/routes/CommonLayout";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/auth"
          element={
            <AuthRedirect>
              <AuthPage />
            </AuthRedirect>
          }
        />
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/health-record" element={<HealthRecordPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
