import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

function AuthPage() {
  let [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSuccess = (user) =>
    navigate(user.role === "ADMIN" ? "/admin" : "/menu");

  const handleRegisterSuccess = () => {
    setActiveTab("login");
  };
  return (
    <AuthCard activeTab={activeTab} onSwitchTab={handleSwitchTab}>
      {activeTab === "login" ?
        <LoginForm onSuccess={handleLoginSuccess}></LoginForm>
      : <RegisterForm onSuccess={handleRegisterSuccess} />}
    </AuthCard>
  );
}

export default AuthPage;
