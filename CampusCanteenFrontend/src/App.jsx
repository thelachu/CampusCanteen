import "./App.css";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Admin from "./admin/pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
