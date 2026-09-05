import { Search, User, ChevronDown, LogOut, UserCircle } from "lucide-react";

import { useState } from "react";

function TopBar({ search, setSearch }) {
  const [profileOpen, setProfileOpen] = useState(false);

  const userName = localStorage.getItem("userName") || "Lachu";

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <header className="topbar">
      {/* Search */}
      <div className="search-box">
        <Search size={22} />

        <input
          type="text"
          placeholder="Search menu items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Profile */}
      <div className="profile-wrapper">
        <button
          className="profile-button"
          onClick={() => setProfileOpen(!profileOpen)}>
          <div className="profile-avatar">
            <User size={19} />
          </div>

          <div className="profile-info">
            <span>Welcome back</span>

            <strong>{userName}</strong>
          </div>

          <ChevronDown size={18} className={profileOpen ? "rotate-icon" : ""} />
        </button>

        {/* Dropdown */}
        {profileOpen && (
          <div className="profile-dropdown">
            <button>
              <UserCircle size={18} />
              My Profile
            </button>

            <button className="logout-button" onClick={handleLogout}>
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default TopBar;
