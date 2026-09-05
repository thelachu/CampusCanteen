import "./TabSwitch.css";
function TabSwitch({ activeTab, onSwitchTab }) {
  return (
    <div className="tab-switch">
      <button
        className={activeTab === "login" ? "tab active" : "tab"}
        onClick={() => onSwitchTab("login")}>
        Login
      </button>
      <button
        className={activeTab === "signup" ? "tab active" : "tab"}
        onClick={() => onSwitchTab("signup")}>
        Sign Up
      </button>
    </div>
  );
}

export default TabSwitch;
