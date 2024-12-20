import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root path renders the LoginPage with a wrapper */}
        <Route path="/" element={<LoginWrapper />} />
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper component to handle navigation logic for LoginPage
function LoginWrapper() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Navigate to the dashboard after successful login
    navigate("/dashboard");
  };

  return <LoginPage onLoginSuccess={handleLoginSuccess} />;
}

export default App;
