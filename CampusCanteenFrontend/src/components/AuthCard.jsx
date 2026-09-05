import { UtensilsCrossed } from "lucide-react";
import TabSwitch from "./TabSwitch";
import "./Authcard.css";

function AuthCard({ activeTab, onSwitchTab, children }) {
  return (
    <div className="auth-page">
      <div className="auth-logo">
        <UtensilsCrossed size={28} color="#fff" />
      </div>
      <h1 className="auth-title">Campus Canteen</h1>
      <p className="auth-subtitle">Sign in to order your favourite food</p>
      <div className="auth-card">
        <TabSwitch activeTab={activeTab} onSwitchTab={onSwitchTab} />
        {children}
      </div>
    </div>
  );
}

export default AuthCard;
